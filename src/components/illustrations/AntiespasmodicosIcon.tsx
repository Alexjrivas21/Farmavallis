
import React from 'react';

export const AntiespasmodicosIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <path d="M10 50 C 25 20, 35 80, 50 50 C 65 20, 75 80, 90 50" stroke="#ef4444" strokeWidth="8" fill="none" strokeLinecap="round">
            <animate attributeName="d" values="M10 50 C 25 20, 35 80, 50 50 C 65 20, 75 80, 90 50; M10 50 H 90; M10 50 C 25 20, 35 80, 50 50 C 65 20, 75 80, 90 50" dur="3s" repeatCount="indefinite" />
        </path>
    </svg>
);
