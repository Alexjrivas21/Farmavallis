
import React from 'react';

export const TuberculosisIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <path d="M50 15 L85 35 V 70 L50 90 L15 70 V 35 Z" fill="#60a5fa" opacity="0.8"/>
        <g opacity="0.7">
            <path d="M50 35 V 50" stroke="#4b5563" strokeWidth="6" fill="none" strokeLinecap="round"/>
            <path d="M50 50 C 35 50, 30 60, 35 75 C 40 85, 45 80, 45 75" fill="#f87171" />
            <path d="M50 50 C 65 50, 70 60, 65 75 C 60 85, 55 80, 55 75" fill="#f87171" />
        </g>
    </svg>
);
