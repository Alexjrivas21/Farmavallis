
import React from 'react';

export const ColiriosIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <path d="M10 50 C 30 25, 70 25, 90 50 C 70 75, 30 75, 10 50 Z" fill="none" stroke="#d1d5db" strokeWidth="6"/>
        <circle cx="50" cy="50" r="15" fill="#60a5fa" />
        <circle cx="50" cy="50" r="5" fill="#0a192f" />
        <path d="M 50 15 L 45 30 H 55 Z" fill="#e5e7eb" />
        <circle cx="50" cy="40" r="4" fill="#89d3e5">
            <animateMotion path="M 0 0 V 10" dur="1s" repeatCount="indefinite" />
        </circle>
    </svg>
);
