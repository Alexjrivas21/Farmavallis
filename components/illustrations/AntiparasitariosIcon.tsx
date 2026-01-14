
import React from 'react';

export const AntiparasitariosIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <path d="M50 15 L85 35 V 70 L50 90 L15 70 V 35 Z" fill="#104b90" />
        <path d="M50 25 L75 40 V 65 L50 80 L25 65 V 40 Z" fill="#60a5fa" />
        <g fill="#34d399">
            <path d="M10 10 L 15 20 L 20 10 Z"><animateTransform attributeName="transform" type="translate" values="0 0; 5 10; 0 0" dur="3s" repeatCount="indefinite"/></path>
            <circle cx="20" cy="80" r="5"><animateTransform attributeName="transform" type="translate" values="0 0; 5 -10; 0 0" dur="2s" repeatCount="indefinite"/></circle>
            <path d="M80 20 L 85 25 L 90 20 L 85 15 Z"><animateTransform attributeName="transform" type="translate" values="0 0; -10 5; 0 0" dur="2.5s" repeatCount="indefinite"/></path>
        </g>
    </svg>
);
