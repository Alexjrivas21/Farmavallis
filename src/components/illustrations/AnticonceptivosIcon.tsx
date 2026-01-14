
import React from 'react';

export const AnticonceptivosIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <defs>
            <linearGradient id="blisterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e5e7eb"/>
                <stop offset="100%" stopColor="#d1d5db"/>
            </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="40" fill="url(#blisterGradient)"/>
        <path d="M15 40 A 40 40 0 0 1 85 60" stroke="rgba(255,255,255,0.7)" strokeWidth="2" fill="none"/>
        <g>
            {[...Array(7)].map((_, i) => (
                <circle
                    key={i}
                    cx={50 + 30 * Math.cos(2 * Math.PI * i / 7)}
                    cy={50 + 30 * Math.sin(2 * Math.PI * i / 7)}
                    r="7"
                    fill={i < 5 ? "#f87171" : "#fb923c"}
                />
            ))}
        </g>
    </svg>
);
