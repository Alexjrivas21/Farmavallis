
import React from 'react';

export const AntiepilepticosIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <path d="M50,15 C 25,15 15,35 15,55 C 15,80 30,90 50,90 C 70,90 85,80 85,55 C 85,35 75,15 50,15 Z" fill="#4b5563" opacity="0.7" />
        <path d="M40 30 L 50 50 L 45 60 L 60 80" stroke="#fbb01c" strokeWidth="5" fill="none" strokeLinecap="round">
            <animate attributeName="opacity" values="1;0.2;1" dur="0.5s" repeatCount="indefinite"/>
        </path>
         <circle cx="50" cy="55" r="35" fill="none" stroke="#60a5fa" strokeWidth="6" strokeDasharray="15 10" opacity="0.8">
            <animate attributeName="stroke-dashoffset" from="0" to="25" dur="1s" repeatCount="indefinite" />
        </circle>
    </svg>
);
