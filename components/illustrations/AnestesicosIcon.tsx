
import React from 'react';

export const AnestesicosIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <g transform="rotate(-30 60 50)">
        <rect x="50" y="10" width="20" height="10" rx="2" fill="#9ca3af" />
        <rect x="45" y="20" width="30" height="60" rx="5" fill="#f1f5f9" />
        <rect x="45" y="50" width="30" height="30" rx="5" fill="#89d3e5" />
        <rect x="40" y="80" width="40" height="5" rx="2" fill="#d1d5db" />
        <path d="M55 20 L 55 10 L 65 10 L 65 20" stroke="#60a5fa" strokeWidth="4" fill="none"/>
        </g>
    </svg>
);
