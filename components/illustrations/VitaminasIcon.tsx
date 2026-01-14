
import React from 'react';

export const VitaminasIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <defs>
            <radialGradient id="sunburst">
                <stop offset="0%" stopColor="#fbb01c" />
                <stop offset="70%" stopColor="#fb923c" />
                <stop offset="100%" stopColor="#f97316" />
            </radialGradient>
            <filter id="glow">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>
        <circle cx="50" cy="50" r="35" fill="url(#sunburst)" filter="url(#glow)"/>
        <path d="M50 15 V 85 M 15 50 H 85 M 25 25 L 75 75 M 25 75 L 75 25" stroke="rgba(255,255,255,0.7)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="50" cy="50" r="10" fill="rgba(255,255,255,0.7)" />
    </svg>
);
