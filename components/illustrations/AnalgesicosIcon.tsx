
import React from 'react';

export const AnalgesicosIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <defs>
            <radialGradient id="painGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="rgba(239, 68, 68, 0.8)" />
                <stop offset="100%" stopColor="rgba(239, 68, 68, 0)" />
            </radialGradient>
        </defs>
        <path d="M 50,20 C 30,20 20,40 20,60 C 20,80 35,90 50,90 C 65,90 80,80 80,60 C 80,40 70,20 50,20 Z" fill="#4b5563" opacity="0.6"/>
        <circle cx="60" cy="45" r="20" fill="url(#painGradient)" />
        <path d="M 20 60 Q 50 50, 80 70" stroke="#60a5fa" strokeWidth="6" fill="none" strokeLinecap="round" strokeDasharray="100" strokeDashoffset="100">
            <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1.5s" fill="freeze" />
        </path>
    </svg>
);
