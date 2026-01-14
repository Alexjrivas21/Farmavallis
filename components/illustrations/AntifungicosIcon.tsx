
import React from 'react';

export const AntifungicosIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <path d="M20 80 C 40 60, 60 60, 80 80" fill="#fb923c" stroke="#a56a43" strokeWidth="4"/>
        <path d="M40 50 L 45 45 M 45 50 L 40 45" stroke="#34d399" strokeWidth="4" strokeLinecap="round">
            <animateTransform attributeName="transform" type="scale" values="1;0;1" begin="1s" dur="2s" repeatCount="indefinite" />
        </path>
        <path d="M60 40 L 65 35 M 65 40 L 60 35" stroke="#34d399" strokeWidth="4" strokeLinecap="round">
             <animateTransform attributeName="transform" type="scale" values="1;0;1" dur="2s" repeatCount="indefinite" />
        </path>
        <path d="M 10 30 Q 50 10, 90 30" stroke="#f1f5f9" strokeWidth="6" fill="none" strokeLinecap="round" >
             <animate attributeName="d" values="M 10 30 Q 50 10, 90 30; M 10 50 Q 50 30, 90 50; M 10 30 Q 50 10, 90 30" dur="3s" repeatCount="indefinite" />
        </path>
    </svg>
);
