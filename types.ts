import React from 'react';

export interface ChakraInfo {
  dayRange: string;
  chakraName: string;
  sanskritName: string;
  focus: string;
  activities: string;
  affirmation: string;
  color: string;
  gradient: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  imbalanceSigns: string;
  balanceBenefits: string;
}

export interface JournalEntry {
  dominantFeeling: string;
  activitiesDone: string;
  affirmation: string;
  awarenessToday: string;
  energyChallenge: string;
  threeGratefulThings: string;
  energyScale: number;
}
