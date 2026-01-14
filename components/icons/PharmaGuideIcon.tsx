
import React from 'react';

export const PharmaGuideIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <linearGradient id="mortarBody" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e5e7eb" />
                <stop offset="100%" stopColor="#9ca3af" />
            </linearGradient>
            <linearGradient id="pestleHandle" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbb01c" />
                <stop offset="100%" stopColor="#fb923c" />
            </linearGradient>
             <linearGradient id="mortarHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.1)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.6)" />
            </linearGradient>
            <filter id="iconShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="3" dy="5" stdDeviation="3" floodColor="#000" floodOpacity="0.4" />
            </filter>
        </defs>

        <g filter="url(#iconShadow)">
            {/* Mortar */}
            <path d="M15 30 H 85 V 45 L 70 80 H 30 L 15 45 Z" fill="url(#mortarBody)" />
            <path d="M15 30 H 85" stroke="url(#mortarHighlight)" strokeWidth="4" fill="none" />
            <rect x="25" y="80" width="50" height="10" rx="3" fill="#9ca3af" />

            {/* Pestle */}
            <g transform="rotate(25 50 40)">
                <rect x="45" y="5" width="10" height="50" rx="5" fill="#d1d5db" />
                <circle cx="50" cy="60" r="10" fill="url(#pestleHandle)" />
            </g>
        </g>
    </svg>
);
