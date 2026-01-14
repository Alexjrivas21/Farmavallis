
import React from 'react';

export const AntidepresivosIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <defs>
            <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#9ca3af" />
                <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
        </defs>
        <rect width="100" height="100" fill="url(#skyGradient)" />
        <path d="M20 50 Q 30 30, 50 40 T 80 50" fill="#4b5563">
            <animate attributeName="d" values="M20 50 Q 30 30, 50 40 T 80 50; M120 50 Q 130 30, 150 40 T 180 50; M120 50 Q 130 30, 150 40 T 180 50; M20 50 Q 30 30, 50 40 T 80 50" dur="4s" repeatCount="indefinite" />
        </path>
        <circle cx="70" cy="30" r="15" fill="#fbb01c">
            <animate attributeName="opacity" values="0;0;1;1;0" dur="4s" repeatCount="indefinite" />
        </circle>
    </svg>
);
