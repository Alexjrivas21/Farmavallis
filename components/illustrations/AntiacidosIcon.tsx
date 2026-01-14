
import React from 'react';

export const AntiacidosIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <path d="M30,20 C 5,20 10,60 35,65 L35,85 C 35,95 45,95 45,85 L45,65 C 80,70 95,20 70,20 C 60,10 40,10 30,20 Z" fill="#f87171" opacity="0.6" />
        <path d="M50 25 L80 40 V 70 L50 85 L20 70 V 40 Z" fill="#60a5fa" >
             <animateTransform attributeName="transform" type="scale" values="1;1.05;1" dur="2s" repeatCount="indefinite" />
        </path>
    </svg>
);
