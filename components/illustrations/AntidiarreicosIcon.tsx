
import React from 'react';

export const AntidiarreicosIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <path d="M20 30 C 40 10, 60 50, 80 30" stroke="#ef4444" strokeWidth="12" fill="none" strokeLinecap="round">
            <animate attributeName="d" values="M20 30 C 40 10, 60 50, 80 30;M20 30 C 40 30, 60 30, 80 30;M20 30 C 40 10, 60 50, 80 30" dur="2s" repeatCount="indefinite" />
        </path>
        <path d="M80 70 C 60 90, 40 50, 20 70" stroke="#60a5fa" strokeWidth="12" fill="none" strokeLinecap="round">
             <animate attributeName="d" values="M80 70 C 60 90, 40 50, 20 70;M80 70 C 60 70, 40 70, 20 70;M80 70 C 60 90, 40 50, 20 70" dur="2s" repeatCount="indefinite" />
        </path>
    </svg>
);
