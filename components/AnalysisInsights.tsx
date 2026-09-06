
import React from 'react';
import type { JournalEntry } from '../types';

interface AnalysisInsightsProps {
  journalEntries: Record<number, JournalEntry>;
  analysisResult: string;
  isAnalyzing: boolean;
  analysisError: string;
  onGenerateAnalysis: () => void;
}

const AnalysisInsights: React.FC<AnalysisInsightsProps> = ({
  journalEntries,
  analysisResult,
  isAnalyzing,
  analysisError,
  onGenerateAnalysis,
}) => {
  const hasEntries = Object.keys(journalEntries).length > 0;

  return (
    <div className="w-full max-w-2xl bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6 md:p-8 border border-white/50">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Analisis AI</h2>
      <p className="text-gray-600 mb-6 text-sm">
        Dapatkan wawasan dari perjalanan Anda. AI akan menganalisis pola emosi, tantangan, dan rasa syukur dari entri jurnal Anda.
      </p>

      {!analysisResult && (
        <div className="flex flex-col items-center">
          <button
            onClick={onGenerateAnalysis}
            disabled={!hasEntries || isAnalyzing}
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75"
          >
            {isAnalyzing ? 'Menganalisis...' : 'Dapatkan Analisis AI'}
          </button>
          {!hasEntries && <p className="text-xs text-gray-500 mt-2">Isi setidaknya satu jurnal untuk mengaktifkan analisis.</p>}
        </div>
      )}

      {analysisError && <p className="text-red-600 bg-red-100 p-3 rounded-md text-center">{analysisError}</p>}

      {analysisResult && (
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Wawasan dari Jurnal Anda</h3>
          <div className="text-gray-700 space-y-2 p-4 bg-gray-50/50 rounded-lg border border-gray-200/80" style={{ whiteSpace: 'pre-wrap' }}>
            {analysisResult}
          </div>
           <button
            onClick={onGenerateAnalysis}
            disabled={isAnalyzing}
            className="w-full mt-6 px-6 py-2 bg-white/80 text-gray-700 font-semibold rounded-lg shadow-sm hover:bg-white disabled:opacity-50 transition-all duration-300"
          >
             {isAnalyzing ? 'Menganalisis Ulang...' : 'Buat Analisis Baru'}
          </button>
        </div>
      )}
    </div>
  );
};

export default AnalysisInsights;
