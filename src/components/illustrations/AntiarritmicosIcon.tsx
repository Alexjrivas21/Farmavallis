
import React from 'react';

export const AntiarritmicosIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
         <path d="M50 30 C 30 10, 10 30, 30 50 L 50 70 L 70 50 C 90 30, 70 10, 50 30 Z" fill="#ef4444" opacity="0.3"/>
        <path d="M10 50 L 25 50 L 30 60 L 35 40 L 40 55 L 45 50 H 55 L 60 45 L 65 55 L 70 50 H 90" stroke="#34d399" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <animate attributeName="d" values="M10 50 L 25 50 L 30 60 L 35 40 L 40 55 L 45 50 H 55 L 60 45 L 65 55 L 70 50 H 90;M10 50 H 30 L 40 35 L 60 65 L 70 50 H 90;M10 50 L 25 50 L 30 60 L 35 40 L 40 55 L 45 50 H 55 L 60 45 L 65 55 L 70 50 H 90" dur="3s" repeatCount="indefinite" />
        </path>
    </svg>
);
