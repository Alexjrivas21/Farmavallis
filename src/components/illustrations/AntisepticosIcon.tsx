
import React from 'react';

export const AntisepticosIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <path d="M30 90 V 50 C 30 30, 40 20, 50 20 S 70 30, 70 50 V 90" fill="#fb923c" stroke="#a56a43" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round"/>
        <path d="M 50 10 C 50 10, 60 25, 50 40 C 40 25, 50 10, 50 10 Z" fill="#34d399">
             <animateMotion path="M 0 0 V 15" dur="2s" repeatCount="indefinite" />
        </path>
         <path d="M 30 60 L 25 55 M 70 60 L 75 55 M 50 50 L 50 45" stroke="#f1f5f9" strokeWidth="3" strokeLinecap="round">
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
        </path>
    </svg>
);
