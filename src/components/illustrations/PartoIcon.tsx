
import React from 'react';

export const PartoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <circle cx="50" cy="50" r="40" stroke="#d1d5db" strokeWidth="8" fill="none"/>
        <path d="M50 50 L 50 20" stroke="#f1f5f9" strokeWidth="6" strokeLinecap="round">
            <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="5s" repeatCount="indefinite"/>
        </path>
        <path d="M50 50 L 70 50" stroke="#fbb01c" strokeWidth="6" strokeLinecap="round">
            <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="2s" repeatCount="indefinite"/>
        </path>
    </svg>
);
