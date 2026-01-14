
import React from 'react';

export const AnsioliticosIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <path d="M10 50 C 20 20, 30 80, 40 50 S 60 20, 70 50" fill="none" stroke="#ef4444" strokeWidth="4" strokeLinecap="round">
            <animate attributeName="d" values="M10 50 C 20 20, 30 80, 40 50 S 60 20, 70 50; M10 50 C 20 50, 30 50, 40 50 S 60 50, 70 50; M10 50 C 20 20, 30 80, 40 50 S 60 20, 70 50" dur="3s" repeatCount="indefinite" />
        </path>
         <path d="M20 70 C 30 70, 40 70, 50 70 S 70 70, 80 70" fill="none" stroke="#60a5fa" strokeWidth="6" strokeLinecap="round"/>
    </svg>
);
