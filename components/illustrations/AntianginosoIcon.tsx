
import React from 'react';

export const AntianginosoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <path d="M50 25 C 30 5, 10 25, 30 45 L 50 65 L 70 45 C 90 25, 70 5, 50 25 Z" fill="#ef4444" />
        <path d="M25 45 C 40 55, 60 55, 75 45" stroke="#4b5563" strokeWidth="8" strokeLinecap="round">
            <animate attributeName="stroke-width" values="8;0;8" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0;1" dur="2s" repeatCount="indefinite" />
        </path>
    </svg>
);
