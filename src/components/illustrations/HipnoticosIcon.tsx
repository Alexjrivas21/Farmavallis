
import React from 'react';

export const HipnoticosIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <circle cx="50" cy="50" r="40" fill="#104b90"/>
        <path d="M35 50 C 40 60, 60 60, 65 50" stroke="#f1f5f9" strokeWidth="4" fill="none" strokeLinecap="round"/>
        <path d="M30 40 Q 50 20, 70 40" fill="none" stroke="#fbb01c" strokeWidth="8" strokeLinecap="round"/>
        <g fill="#f1f5f9" fontWeight="bold" fontSize="12" fontFamily="monospace">
          <text x="70" y="40">Z<animate attributeName="opacity" values="0;1;0" begin="0s" dur="1.8s" repeatCount="indefinite"/></text>
          <text x="75" y="30">z<animate attributeName="opacity" values="0;1;0" begin="0.6s" dur="1.8s" repeatCount="indefinite"/></text>
          <text x="80" y="20">z<animate attributeName="opacity" values="0;1;0" begin="1.2s" dur="1.8s" repeatCount="indefinite"/></text>
        </g>
    </svg>
);
