
import React from 'react';

export const AntigripalesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <path d="M20 30 H 70 V 75 A 15 15 0 0 1 55 90 H 35 A 15 15 0 0 1 20 75 Z" fill="#60a5fa"/>
        <path d="M70 45 H 80 A 10 10 0 0 1 80 65 H 70" fill="none" stroke="#60a5fa" strokeWidth="8"/>
        <path d="M30 25 C 30 15, 40 15, 40 25 M 45 20 C 45 10, 55 10, 55 20 M 60 25 C 60 15, 70 15, 70 25" stroke="#d1d5db" strokeWidth="4" strokeLinecap="round">
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
        </path>
        <circle cx="30" cy="40" r="10" fill="#fbb01c" stroke="#f97316" strokeWidth="3"/>
    </svg>
);
