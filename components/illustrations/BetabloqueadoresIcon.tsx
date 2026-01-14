
import React from 'react';

export const BetabloqueadoresIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <path d="M50 25 C 30 5, 10 25, 30 45 L 50 65 L 70 45 C 90 25, 70 5, 50 25 Z" fill="#ef4444" opacity="0.7" />
        <path d="M50 30 L80 45 V 75 L50 90 L20 75 V 45 Z" fill="#60a5fa" />
        <text x="50" y="70" fill="white" fontSize="30" textAnchor="middle" fontWeight="bold">β</text>
    </svg>
);
