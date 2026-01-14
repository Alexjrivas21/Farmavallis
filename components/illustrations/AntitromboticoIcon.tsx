
import React from 'react';

export const AntitromboticoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <path d="M15 50 C 40 20, 60 80, 85 50" stroke="#f87171" strokeWidth="14" fill="none" strokeLinecap="round"/>
        <circle cx="50" cy="48" r="10" fill="#dc2626">
            <animate attributeName="r" values="10;2;10" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="45" cy="35" r="3" fill="#60a5fa"><animateTransform attributeName="transform" type="translate" values="0 0; 5 10; 0 0" dur="2s" repeatCount="indefinite"/></circle>
        <circle cx="55" cy="60" r="4" fill="#60a5fa"><animateTransform attributeName="transform" type="translate" values="0 0; -5 -10; 0 0" dur="2.5s" repeatCount="indefinite"/></circle>
    </svg>
);
