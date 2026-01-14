
import React from 'react';

export const AntiasmaticoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <path d="M50 25 V 45" stroke="#4b5563" strokeWidth="8" fill="none" strokeLinecap="round"/>
        <path id="lungLeft" d="M50 45 C 25 45, 15 60, 20 80 C 25 90, 40 85, 40 80" fill="#60a5fa">
             <animate attributeName="d" values="M50 45 C 35 45, 25 60, 30 75 C 35 85, 40 80, 40 75; M50 45 C 25 45, 15 60, 20 80 C 25 90, 40 85, 40 80; M50 45 C 35 45, 25 60, 30 75 C 35 85, 40 80, 40 75" dur="2s" repeatCount="indefinite" />
        </path>
        <path id="lungRight" d="M50 45 C 75 45, 85 60, 80 80 C 75 90, 60 85, 60 80" fill="#60a5fa">
             <animate attributeName="d" values="M50 45 C 65 45, 75 60, 70 75 C 65 85, 60 80, 60 75; M50 45 C 75 45, 85 60, 80 80 C 75 90, 60 85, 60 80; M50 45 C 65 45, 75 60, 70 75 C 65 85, 60 80, 60 75" dur="2s" repeatCount="indefinite" />
        </path>
    </svg>
);
