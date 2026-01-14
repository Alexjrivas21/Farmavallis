
import React from 'react';

export const AntihipertensivosIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <path d="M20 80 A 40 40 0 0 1 80 80" stroke="#d1d5db" strokeWidth="10" fill="none"/>
        <path d="M20 80 A 40 40 0 0 1 50 40" stroke="#34d399" strokeWidth="10" fill="none"/>
        <path d="M50 40 A 40 40 0 0 1 80 80" stroke="#ef4444" strokeWidth="10" fill="none"/>
        <g transform="translate(50 80)">
             <path d="M0 0 L -25 -25" stroke="#0a192f" strokeWidth="6" strokeLinecap="round">
                <animateTransform attributeName="transform" type="rotate" from="-45" to="45" dur="2s" repeatCount="indefinite" />
            </path>
        </g>
    </svg>
);
