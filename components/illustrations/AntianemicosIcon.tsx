
import React from 'react';

export const AntianemicosIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <path d="M10 50 H 90" fill="none" stroke="#f87171" strokeWidth="20" strokeLinecap="round" opacity="0.4"/>
        <circle cx="25" cy="50" r="8" fill="#f87171"><animate attributeName="cx" values="25;75;25" dur="3s" repeatCount="indefinite"/></circle>
        <circle cx="35" cy="50" r="10" fill="#ef4444"><animate attributeName="cx" values="35;85;35" dur="2.5s" repeatCount="indefinite"/></circle>
        <circle cx="15" cy="50" r="9" fill="#dc2626"><animate attributeName="cx" values="15;65;15" dur="3.5s" repeatCount="indefinite"/></circle>
    </svg>
);
