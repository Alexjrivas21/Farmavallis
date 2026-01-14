
import React from 'react';

export const AntihemorragicosIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <path d="M50 20 C 50 20, 80 50, 50 80 C 20 50, 50 20, 50 20 Z" fill="#ef4444" />
        <path d="M10 50 H 45" stroke="#d1d5db" strokeWidth="10" strokeLinecap="round">
            <animate attributeName="x" from="-35" to="10" dur="1s" fill="freeze" />
        </path>
        <path d="M90 50 H 55" stroke="#d1d5db" strokeWidth="10" strokeLinecap="round">
             <animate attributeName="x" from="135" to="90" dur="1s" fill="freeze" />
        </path>
    </svg>
);
