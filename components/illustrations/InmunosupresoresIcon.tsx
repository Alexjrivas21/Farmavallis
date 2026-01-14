
import React from 'react';

export const InmunosupresoresIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <circle cx="50" cy="50" r="20" fill="#f1f5f9"/>
        <path d="M20 70 C 20 40, 80 40, 80 70" stroke="#60a5fa" strokeWidth="10" fill="none" strokeLinecap="round" >
            <animate attributeName="d" values="M20 70 C 20 40, 80 40, 80 70; M20 60 C 20 30, 80 30, 80 60; M20 70 C 20 40, 80 40, 80 70" dur="2s" repeatCount="indefinite"/>
        </path>
    </svg>
);
