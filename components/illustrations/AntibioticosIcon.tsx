
import React from 'react';

export const AntibioticosIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <defs>
            <linearGradient id="antibioticCapsule" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#104b90" />
                <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="35" fill="#fbb01c" opacity="0.2"/>
        <g transform="rotate(-45 50 50)">
            <path d="M30 35 H70 A15 15 0 0 1 70 65 H30 A15 15 0 0 1 30 35 Z" fill="#ef4444"/>
            <path d="M30 35 H70 V 50 H30 Z" fill="#fbb01c"/>
        </g>
        <path d="M20 25 L 25 20 M 80 85 L 85 80 M 15 80 L 20 75" stroke="#ef4444" strokeWidth="4" strokeLinecap="round">
             <animate attributeName="opacity" values="1;0;1" dur="2s" repeatCount="indefinite" />
        </path>
    </svg>
);
