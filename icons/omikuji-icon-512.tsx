import React from 'react';

const OmikujiIcon512: React.FC = () => {
  return (
    <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="512" height="512" fill="#F0E6D2"/>
      
      {/* Omikuji container */}
      <rect x="96" y="32" width="320" height="448" rx="16" fill="#8B4513"/>
      <rect x="112" y="48" width="288" height="416" rx="8" fill="#F9F1E7"/>
      
      {/* Red seal */}
      <circle cx="256" cy="128" r="64" fill="#FF0000"/>
      <circle cx="256" cy="128" r="56" fill="#FFFFFF"/>
      <path d="M224 128C224 110.327 238.327 96 256 96C273.673 96 288 110.327 288 128C288 145.673 273.673 160 256 160" stroke="#FF0000" strokeWidth="16"/>
      
      {/* Kanji (Fortune) */}
      <path d="M236 108V148M276 108V148M236 128H276" stroke="#FF0000" strokeWidth="8"/>
      
      {/* Text lines */}
      <rect x="144" y="224" width="224" height="16" rx="8" fill="#8B4513"/>
      <rect x="144" y="272" width="224" height="16" rx="8" fill="#8B4513"/>
      <rect x="144" y="320" width="224" height="16" rx="8" fill="#8B4513"/>
      <rect x="144" y="368" width="160" height="16" rx="8" fill="#8B4513"/>
      
      {/* Ribbon */}
      <path d="M96 64C96 64 176 144 256 64C336 144 416 64 416 64" stroke="#FF0000" strokeWidth="32" strokeLinecap="round"/>
      
      {/* Shadow */}
      <rect x="416" y="32" width="16" height="448" fill="#00000040"/>
      <rect x="96" y="480" width="336" height="16" fill="#00000040"/>
    </svg>
  );
};

export default OmikujiIcon512;

