
import React from 'react';

export const CardiotonicosIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <path d="M50 25 C 30 5, 10 25, 30 45 L 50 65 L 70 45 C 90 25, 70 5, 50 25 Z" fill="#ef4444" />
        <path d="M50 25 C 30 5, 10 25, 30 45 L 50 65 L 70 45 C 90 25, 70 5, 50 25 Z" stroke="#f87171" strokeWidth="4" fill="none">
            <animate attributeName="stroke-width" values="0;6;0" dur="1.5s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite"/>
        </path>
    </svg>
);
