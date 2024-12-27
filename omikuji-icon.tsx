import React from 'react';

const OmikujiIcon: React.FC = () => {
  return (
    <svg width="192" height="192" viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background circle */}
      <circle cx="96" cy="96" r="92" fill="#F9F1E7" stroke="#8B4513" strokeWidth="8"/>
      
      {/* Omikuji paper */}
      <rect x="56" y="40" width="80" height="120" rx="4" fill="#FFFFFF" stroke="#8B4513" strokeWidth="4"/>
      
      {/* Red seal */}
      <circle cx="96" cy="70" r="20" fill="#FF0000"/>
      
      {/* Text lines */}
      <line x1="66" y1="100" x2="126" y2="100" stroke="#8B4513" strokeWidth="4"/>
      <line x1="66" y1="120" x2="126" y2="120" stroke="#8B4513" strokeWidth="4"/>
      <line x1="66" y1="140" x2="126" y2="140" stroke="#8B4513" strokeWidth="4"/>
      
      {/* Ribbon */}
      <path d="M56 44C56 44 76 64 96 44C116 64 136 44 136 44" stroke="#FF0000" strokeWidth="8" strokeLinecap="round"/>
    </svg>
  );
};

export default OmikujiIcon;

