
import React from 'react';

export const AntipireticosIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <g transform="rotate(45 50 50)">
            <rect x="44" y="10" width="12" height="75" rx="6" fill="#e5e7eb" />
            <rect x="46" y="12" width="8" height="71" rx="4" fill="#f1f5f9" />
            <rect id="mercury" x="47" y="25" width="6" height="40" rx="3" fill="#ef4444">
                <animate attributeName="height" values="40;10;40" dur="3s" repeatCount="indefinite" />
                <animate attributeName="y" values="25;55;25" dur="3s" repeatCount="indefinite" />
                <animate attributeName="fill" values="#ef4444;#60a5fa;#ef4444" dur="3s" repeatCount="indefinite" />
            </rect>
            <circle cx="50" cy="80" r="14" fill="#d1d5db" />
            <circle cx="50" cy="80" r="11" fill="#ef4444">
                 <animate attributeName="fill" values="#ef4444;#60a5fa;#ef4444" dur="3s" repeatCount="indefinite" />
            </circle>
        </g>
    </svg>
);
