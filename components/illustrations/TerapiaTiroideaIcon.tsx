
import React from 'react';

export const TerapiaTiroideaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <path d="M20 80 H 80" stroke="#9ca3af" strokeWidth="6" strokeLinecap="round"/>
        <path d="M50 80 V 70" stroke="#9ca3af" strokeWidth="6" strokeLinecap="round"/>
        <path d="M30 70 L 70 70" stroke="#9ca3af" strokeWidth="6" strokeLinecap="round">
             <animateTransform attributeName="transform" type="rotate" values="5 50 70; -5 50 70; 5 50 70" dur="3s" repeatCount="indefinite"/>
        </path>
        <g transform="translate(0 -10)">
            <path d="M50 50 C 15 20, 10 40, 20 60 C 30 80, 50 70, 50 50" fill="#60a5fa" />
            <path d="M50 50 C 85 20, 90 40, 80 60 C 70 80, 50 70, 50 50" fill="#89d3e5" />
        </g>
    </svg>
);
