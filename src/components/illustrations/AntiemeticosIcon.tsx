
import React from 'react';

export const AntiemeticosIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <path d="M30,30 C 5,30 10,70 35,75 L35,95 C 35,105 45,105 45,95 L45,75 C 80,80 95,30 70,30 C 60,20 40,20 30,30 Z" fill="#a56a43" />
        <path d="M50 65 V 35 M 40 45 L 50 35 L 60 45" stroke="#ef4444" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round">
             <animateTransform attributeName="transform" type="translate" values="0 0; 0 -10; 0 0" dur="1.5s" repeatCount="indefinite" />
        </path>
        <rect x="20" y="60" width="60" height="8" rx="4" fill="#60a5fa"/>
    </svg>
);
