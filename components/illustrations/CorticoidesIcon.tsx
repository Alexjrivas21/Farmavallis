
import React from 'react';

export const CorticoidesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <defs>
            <linearGradient id="skinGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="50%" stopColor="#f87171" />
                <stop offset="100%" stopColor="#fb923c" />
            </linearGradient>
        </defs>
        <path d="M10 80 C 30 60, 70 60, 90 80" stroke="url(#skinGradient)" strokeWidth="12" fill="none" strokeLinecap="round"/>
        <path d="M 10 40 Q 50 20, 90 40" stroke="#f1f5f9" strokeWidth="8" fill="none" strokeLinecap="round" >
             <animate attributeName="d" values="M 10 40 Q 50 20, 90 40; M 10 60 Q 50 40, 90 60; M 10 40 Q 50 20, 90 40" dur="3s" repeatCount="indefinite" />
        </path>
    </svg>
);
