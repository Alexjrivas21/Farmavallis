
import React from 'react';

export const HipolipemianteIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <circle cx="50" cy="50" r="40" fill="none" stroke="#f87171" strokeWidth="16" />
        <path d="M50 10 A 40 40 0 0 1 50 90" fill="#fbb01c" stroke="#fbb01c" strokeWidth="16" strokeLinecap="round">
            <animate attributeName="stroke-width" values="16;0;16" dur="3s" repeatCount="indefinite" />
        </path>
         <circle cx="30" cy="30" r="5" fill="#60a5fa"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="3s" repeatCount="indefinite" /></circle>
    </svg>
);
