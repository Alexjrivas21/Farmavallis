
import React from 'react';

export const InhaladoresIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <g transform="rotate(15 50 50)">
            <rect x="42" y="15" width="16" height="30" rx="4" fill="#4b5563" />
            <path d="M30 45 H70 V75 A15 15 0 0 1 55 90 H45 A15 15 0 0 1 30 75 Z" fill="#60a5fa" />
            <path d="M20 50 H30" stroke="#60a5fa" strokeWidth="8" strokeLinecap="round" />
        </g>
        <g>
            <circle cx="20" cy="40" r="5" fill="#d1d5db" opacity="0.8"><animate attributeName="r" values="0;8;0" dur="1.5s" repeatCount="indefinite" /><animate attributeName="opacity" values="1;0;1" dur="1.5s" repeatCount="indefinite" /></circle>
            <circle cx="15" cy="50" r="3" fill="#d1d5db" opacity="0.6"><animate attributeName="r" values="0;6;0" dur="1.7s" begin="0.2s" repeatCount="indefinite" /><animate attributeName="opacity" values="1;0;1" dur="1.7s" begin="0.2s" repeatCount="indefinite" /></circle>
        </g>
    </svg>
);
