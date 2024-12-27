import React from 'react';

interface OmikujiIconProps {
  size: 192 | 512;
}

const OmikujiIcon: React.FC<OmikujiIconProps> = ({ size }) => {
  const viewBox = `0 0 ${size} ${size}`;
  const strokeWidth = size === 192 ? 8 : 16;

  return (
    <svg width={size} height={size} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 背景の円 */}
      <circle cx={size / 2} cy={size / 2} r={size / 2 - strokeWidth / 2} fill="#FFF0E0" stroke="#E67E22" strokeWidth={strokeWidth} />
      
      {/* おみくじの棒 */}
      <rect x={size * 0.3} y={size * 0.2} width={size * 0.4} height={size * 0.6} fill="#8E44AD" rx={size * 0.05} />
      
      {/* おみくじの紙 */}
      <path d={`M${size * 0.3} ${size * 0.4} Q${size * 0.5} ${size * 0.3} ${size * 0.7} ${size * 0.4} V${size * 0.8} Q${size * 0.5} ${size * 0.7} ${size * 0.3} ${size * 0.8} Z`} fill="#F1C40F" />
      
      {/* 文字 */}
      <text x={size / 2} y={size * 0.62} fontSize={size * 0.1} fontWeight="bold" fill="#E74C3C" textAnchor="middle" dominantBaseline="middle">おみくじ</text>
    </svg>
  );
};

export default OmikujiIcon;

