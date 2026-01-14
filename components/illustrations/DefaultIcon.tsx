
import React from 'react';

export const DefaultIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <defs>
            <linearGradient id="mortarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d1d5db" />
                <stop offset="100%" stopColor="#9ca3af" />
            </linearGradient>
            <linearGradient id="pestleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e5e7eb" />
                <stop offset="100%" stopColor="#d1d5db" />
            </linearGradient>
        </defs>
        <path d="M20 30 H 80 V 40 H 75 L 65 80 H 35 L 25 40 H 20 Z" fill="url(#mortarGradient)" />
        <rect x="30" y="80" width="40" height="10" rx="3" fill="#9ca3af" />
        <g transform="rotate(20 50 40)">
            <rect x="45" y="10" width="10" height="50" rx="5" fill="url(#pestleGradient)" />
            <circle cx="50" cy="65" r="8" fill="#e5e7eb" />
        </g>
    </svg>
);
