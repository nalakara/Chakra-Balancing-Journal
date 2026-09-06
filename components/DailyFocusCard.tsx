import React, { useState } from 'react';
import type { ChakraInfo } from '../types';

interface DailyFocusCardProps {
  day: number;
  chakraInfo: ChakraInfo;
}

const InfoRow: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div className="mb-4">
    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{label}</p>
    <p className="text-gray-700 text-base">{children}</p>
  </div>
);

const ChakraDetail: React.FC<{ title: string; content: string; className?: string }> = ({ title, content, className }) => (
    <div className={className}>
        <h4 className="font-semibold text-gray-800 mb-1">{title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{content}</p>
    </div>
);

const DailyFocusCard: React.FC<DailyFocusCardProps> = ({ day, chakraInfo }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = chakraInfo.icon;

  return (
    <div className="w-full max-w-2xl bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/50 overflow-hidden transition-all duration-500">
      <div className="p-6 md:p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Hari ke-{day}</h1>
            <p className="text-lg text-gray-500">{chakraInfo.dayRange}</p>
          </div>
          <div className={`flex items-center gap-4 p-3 bg-white/50 rounded-xl mt-4 sm:mt-0 ${chakraInfo.color}`}>
            <Icon className="w-10 h-10" />
            <div>
              <h2 className={`text-2xl font-bold`}>{chakraInfo.chakraName}</h2>
              <p className="font-medium text-gray-600">{chakraInfo.sanskritName}</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
          <InfoRow label="Fokus">{chakraInfo.focus}</InfoRow>
          <InfoRow label="Aktivitas">{chakraInfo.activities}</InfoRow>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Afirmasi</p>
          <blockquote className={`text-xl font-medium italic ${chakraInfo.color} border-l-4 pl-4 border-current`}>
            {chakraInfo.affirmation}
          </blockquote>
        </div>
      </div>
      
      {/* Expandable Section */}
      <div
        className={`transition-all duration-500 ease-in-out grid ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
        id={`chakra-details-${day}`}
        aria-hidden={!isExpanded}
      >
        <div className="overflow-hidden">
            <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-gray-200 pt-6 space-y-4">
                <ChakraDetail title="Deskripsi" content={chakraInfo.description} />
                <ChakraDetail title="Tanda Ketidakseimbangan" content={chakraInfo.imbalanceSigns} />
                <ChakraDetail title="Manfaat Keseimbangan" content={chakraInfo.balanceBenefits} />
            </div>
        </div>
      </div>
      
      {/* Card Footer with Toggle Button */}
      <div className="bg-gray-50/50 border-t border-gray-200/50">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-gray-600 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-colors"
            aria-expanded={isExpanded}
            aria-controls={`chakra-details-${day}`}
          >
            <span>{isExpanded ? 'Tutup' : 'Pelajari Lebih Lanjut'}</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
      </div>
    </div>
  );
};

export default DailyFocusCard;
