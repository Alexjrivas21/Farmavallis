
import React from 'react';

export const LaxantesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <path d="M10 50 H 90" stroke="#a56a43" strokeWidth="20" fill="none" strokeLinecap="round" opacity="0.5"/>
        <rect x="20" y="42" width="16" height="16" rx="4" fill="#34d399">
            <animate attributeName="x" from="20" to="60" dur="3s" repeatCount="indefinite"/>
        </rect>
        <path d="M70 30 L 85 50 L 70 70" stroke="#f1f5f9" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
