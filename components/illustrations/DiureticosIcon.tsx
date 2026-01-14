
import React from 'react';

export const DiureticosIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <path d="M 50,20 C 20,20 20,80 50,80 C 80,80 80,20 50,20" fill="#f87171" opacity="0.7"/>
        <path d="M50 15 C 50 15, 70 40, 50 60 C 30 40, 50 15, 50 15 Z" fill="#60a5fa">
            <animateMotion path="M 0 0 V 30" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0" dur="2s" repeatCount="indefinite" />
        </path>
    </svg>
);
