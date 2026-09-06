
import React from 'react';
import type { JournalEntry } from '../types';

interface JournalFormProps {
  entry: JournalEntry;
  onUpdate: (entry: JournalEntry) => void;
}

const JournalForm: React.FC<JournalFormProps> = ({ entry, onUpdate }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onUpdate({ ...entry, [e.target.name]: e.target.value });
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate({ ...entry, energyScale: parseInt(e.target.value, 10) });
  };

  const InputField: React.FC<{ label: string; name: keyof JournalEntry; value: string; placeholder?: string }> = ({ label, name, value, placeholder }) => (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  );

  const TextAreaField: React.FC<{ label: string; name: keyof JournalEntry; value: string; placeholder?: string }> = ({ label, name, value, placeholder }) => (
     <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        rows={3}
        placeholder={placeholder}
        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  );

  return (
    <div className="w-full max-w-2xl bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6 md:p-8 border border-white/50">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Jurnal Harian</h2>
      <div className="space-y-6">
        <InputField label="Perasaan dominan" name="dominantFeeling" value={entry.dominantFeeling} placeholder="Tenang, cemas, bahagia..." />
        <InputField label="Aktivitas dilakukan" name="activitiesDone" value={entry.activitiesDone} placeholder="Meditasi, jalan pagi..." />
        <InputField label="Afirmasi hari ini" name="affirmation" value={entry.affirmation} placeholder="Ulangi afirmasi atau buat sendiri..." />
        <TextAreaField label="Kesadaran hari ini" name="awarenessToday" value={entry.awarenessToday} placeholder="Apa yang Anda sadari tentang diri Anda?" />
        <TextAreaField label="Tantangan energi" name="energyChallenge" value={entry.energyChallenge} placeholder="Apa yang menguras atau menghalangi energi Anda?" />
        <TextAreaField label="Tiga hal yang disyukuri" name="threeGratefulThings" value={entry.threeGratefulThings} placeholder="1. ... 2. ... 3. ..." />
        
        <div>
          <label htmlFor="energyScale" className="block text-sm font-medium text-gray-700">Skala energi (1–10)</label>
          <div className="flex items-center gap-4 mt-2">
            <input
              type="range"
              id="energyScale"
              name="energyScale"
              min="1"
              max="10"
              value={entry.energyScale}
              onChange={handleSliderChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
            <span className="font-bold text-indigo-600 w-8 text-center text-lg">{entry.energyScale}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalForm;
