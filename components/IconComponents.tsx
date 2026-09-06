
import React from 'react';

export const RootChakraIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
  </svg>
);

export const SacralChakraIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 2a10 10 0 00-3.54 19.48"></path>
    <path d="M12 22a10 10 0 003.54-19.48"></path>
  </svg>
);

export const SolarPlexusChakraIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M12 2v2"></path>
    <path d="M12 20v2"></path>
    <path d="m4.93 4.93 1.41 1.41"></path>
    <path d="m17.66 17.66 1.41 1.41"></path>
    <path d="M2 12h2"></path>
    <path d="M20 12h2"></path>
    <path d="m4.93 19.07 1.41-1.41"></path>
    <path d="m17.66 6.34 1.41-1.41"></path>
  </svg>
);

export const HeartChakraIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
  </svg>
);

export const ThroatChakraIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
    <path d="M7 12c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5z"></path>
    <path d="M12 8v8"></path>
  </svg>
);

export const ThirdEyeChakraIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

export const CrownChakraIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.69l.34 3.03a1.5 1.5 0 002.83 0L15.5 2.7"></path>
    <path d="M12 2.69l-.34 3.03a1.5 1.5 0 01-2.83 0L8.5 2.7"></path>
    <path d="M8.5 18.31l.34-3.03a1.5 1.5 0 00-2.83 0L5.67 18.3"></path>
    <path d="M15.5 18.31l-.34-3.03a1.5 1.5 0 012.83 0L18.33 18.3"></path>
    <path d="M2.69 12l3.03-.34a1.5 1.5 0 000-2.83L2.7 8.5"></path>
    <path d="M18.3 5.67l3.03.34a1.5 1.5 0 010 2.83L18.33 9.5"></path>
    <path d="M21.31 12l-3.03.34a1.5 1.5 0 000 2.83L21.3 15.5"></path>
    <path d="M5.67 18.3l-3.03-.34a1.5 1.5 0 010-2.83L5.67 14.5"></path>
  </svg>
);
