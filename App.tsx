
import React, { useState, useMemo } from 'react';
import { GoogleGenAI } from '@google/genai';
import DailyFocusCard from './components/DailyFocusCard';
import JournalForm from './components/JournalForm';
import AnalysisInsights from './components/AnalysisInsights';
import DataVisualization from './components/DataVisualization';
import { getSentimentScore } from './utils/sentiment';
import { CHAKRA_PROGRAM } from './constants';
import type { JournalEntry } from './types';

// IMPORTANT: Never expose your API key in client-side code.
// This is a placeholder and should be handled via a secure backend proxy in a real application.
const API_KEY = process.env.API_KEY;

const App: React.FC = () => {
  const [currentDay, setCurrentDay] = useState<number>(1);
  const [journalEntries, setJournalEntries] = useState<Record<number, JournalEntry>>({});
  const [analysisResult, setAnalysisResult] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [analysisError, setAnalysisError] = useState<string>('');

  const chakraInfoForCurrentDay = CHAKRA_PROGRAM[currentDay - 1];

  const handleJournalUpdate = (updatedEntry: JournalEntry) => {
    setJournalEntries(prev => ({
      ...prev,
      [currentDay]: updatedEntry,
    }));
  };

  const handleGenerateAnalysis = async () => {
    if (!API_KEY) {
      setAnalysisError("API Key tidak ditemukan. Mohon konfigurasikan API Key Anda.");
      return;
    }
    
    setAnalysisResult('');
    setAnalysisError('');
    setIsAnalyzing(true);

    try {
      const ai = new GoogleGenAI({ apiKey: API_KEY });
      
      // Fix: Explicitly cast `entry` to `JournalEntry` to resolve TypeScript inference issue.
      const formattedEntries = Object.entries(journalEntries)
        .map(([day, entry]) => {
          const journalEntry = entry as JournalEntry;
          return `
          Hari ke-${day}:
          - Perasaan Dominan: ${journalEntry.dominantFeeling}
          - Kesadaran Hari Ini: ${journalEntry.awarenessToday}
          - Tantangan Energi: ${journalEntry.energyChallenge}
          - Rasa Syukur: ${journalEntry.threeGratefulThings}
        `;
        }).join('\n');

      const prompt = `
        Anda adalah seorang pemandu spiritual yang bijaksana dan penuh empati. Tugas Anda adalah menganalisis entri jurnal berikut dari perjalanan penyeimbangan cakra selama 21 hari.

        Tinjau entri-entri ini dan berikan wawasan yang lembut dan mendukung. Fokus pada:
        1.  **Pola Emosional:** Identifikasi perasaan dominan yang berulang. Apakah ada korelasi antara aktivitas tertentu dengan perasaan positif?
        2.  **Tantangan Energi:** Rangkum tantangan energi yang paling sering muncul.
        3.  **Momen Syukur:** Sorot tema umum dari hal-hal yang disyukuri.
        4.  **Kesimpulan:** Berikan ringkasan singkat yang memberdayakan dan mendorong pengguna untuk melanjutkan perjalanannya.

        Sajikan analisis dalam format poin-poin yang jelas dan mudah dibaca. Gunakan bahasa yang positif dan membangkitkan semangat.

        Berikut adalah data jurnalnya:
        ${formattedEntries}
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      setAnalysisResult(response.text);

    } catch (error) {
      console.error("Error generating analysis:", error);
      setAnalysisError("Terjadi kesalahan saat membuat analisis. Silakan coba lagi.");
    } finally {
      setIsAnalyzing(false);
    }
  };


  const currentJournalEntry = useMemo(() => {
    return journalEntries[currentDay] || {
      dominantFeeling: '',
      activitiesDone: '',
      affirmation: '',
      awarenessToday: '',
      energyChallenge: '',
      threeGratefulThings: '',
      energyScale: 5,
    };
  }, [journalEntries, currentDay]);

  const chartData = useMemo(() => {
    return Object.entries(journalEntries)
      .map(([day, entry]) => {
          const journalEntry = entry as JournalEntry;
          return {
              day: parseInt(day, 10),
              energy: journalEntry.energyScale,
              sentiment: getSentimentScore(journalEntry.dominantFeeling),
          };
      })
      .sort((a, b) => a.day - b.day);
  }, [journalEntries]);

  const hasEnoughDataForChart = chartData.length >= 2;
  
  const goToPreviousDay = () => {
    setCurrentDay(prev => Math.max(1, prev - 1));
  };
  
  const goToNextDay = () => {
    setCurrentDay(prev => Math.min(21, prev + 1));
  };

  const backgroundClass = chakraInfoForCurrentDay.gradient || 'from-gray-100 to-gray-200';

  return (
    <div className={`min-h-screen w-full bg-gradient-to-br ${backgroundClass} transition-colors duration-500`}>
      <main className="container mx-auto px-4 py-8 md:py-12 flex flex-col items-center gap-8">
        <DailyFocusCard day={currentDay} chakraInfo={chakraInfoForCurrentDay} />
        <JournalForm entry={currentJournalEntry} onUpdate={handleJournalUpdate} />
        
        {hasEnoughDataForChart && <DataVisualization data={chartData} />}
        
        <AnalysisInsights
          journalEntries={journalEntries}
          analysisResult={analysisResult}
          isAnalyzing={isAnalyzing}
          analysisError={analysisError}
          onGenerateAnalysis={handleGenerateAnalysis}
        />
        
        <div className="w-full max-w-2xl flex justify-between items-center mt-4">
          <button 
            onClick={goToPreviousDay} 
            disabled={currentDay === 1}
            className="px-6 py-2 bg-white/80 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            Sebelumnya
          </button>
          <span className="text-gray-600 font-medium">Hari {currentDay} / 21</span>
          <button 
            onClick={goToNextDay} 
            disabled={currentDay === 21}
            className="px-6 py-2 bg-white/80 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            Berikutnya
          </button>
        </div>

        <footer className="mt-8 text-center text-gray-500">
          <p>Dibangun dengan cinta untuk perjalanan batin Anda.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;