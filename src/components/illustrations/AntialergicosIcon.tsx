
import React from 'react';

export const AntialergicosIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <path d="M50 15 L85 35 V 70 L50 90 L15 70 V 35 Z" fill="#60a5fa" />
        <path d="M50 15 L85 35 V 70 L50 90 L15 70 V 35 Z" stroke="rgba(255,255,255,0.5)" strokeWidth="3" fill="none"/>
        <g>
          <circle cx="25" cy="25" r="3" fill="#fbb01c"><animate attributeName="cx" values="25;35;25" dur="2s" repeatCount="indefinite" /></circle>
          <circle cx="30" cy="35" r="2" fill="#fbb01c"><animate attributeName="cx" values="30;40;30" dur="2.5s" repeatCount="indefinite" /></circle>
          <circle cx="20" cy="40" r="1" fill="#fbb01c"><animate attributeName="cx" values="20;30;20" dur="1.5s" repeatCount="indefinite" /></circle>
        </g>
    </svg>
);
