
import React from 'react';

export const FarmavallisLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 380 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            {/* Filter for a soft drop shadow for the entire icon */}
            <filter id="logoIconShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="2" dy="3" stdDeviation="2" floodColor="#000" floodOpacity="0.4" />
            </filter>
            
            {/* Gradient for the yellow cross */}
            <linearGradient id="symbolGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" /> {/* Lighter highlight */}
                <stop offset="50%" stopColor="#fbb01c" /> {/* Base color */}
                <stop offset="100%" stopColor="#f59e0b" /> {/* Darker shade for depth */}
            </linearGradient>

            {/* Gradient for the blue circle background */}
            <radialGradient id="circleGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#1e63b8" />
                <stop offset="100%" stopColor="#104b90" />
            </radialGradient>

            {/* Filter to create a subtle 3D bevel/relief effect on the cross */}
            <filter id="cross3d" x="-20%" y="-20%" width="140%" height="140%">
                {/* Highlight from top-left */}
                <feDropShadow dx="-1" dy="-1" stdDeviation="1" floodColor="white" floodOpacity="0.3" result="highlight" />
                {/* Shadow to bottom-right */}
                <feDropShadow dx="1.5" dy="1.5" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.3" result="shadow" />
                <feMerge>
                    <feMergeNode in="shadow" />
                    <feMergeNode in="highlight" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>

        {/* Icon */}
        <g>
            {/* Blue circular background */}
            <circle
                cx="50"
                cy="50"
                r="45"
                fill="url(#circleGradient)"
                filter="url(#logoIconShadow)"
            />
            {/* Yellow cross with 3D effects */}
            <path
                d="M40,20 h20 v20 h20 v20 h-20 v20 h-20 v-20 h-20 v-20 h20 z"
                fill="url(#symbolGradient)"
                filter="url(#cross3d)"
                stroke="#f59e0b"
                strokeWidth="0.5"
                strokeLinejoin="round"
            />
        </g>
        
        {/* Text */}
        <g transform="translate(110, 0)">
            <text
                x="0"
                y="45"
                dominantBaseline="middle"
                fontSize="36"
                fontWeight="bold"
                fontFamily="sans-serif"
                fill="#e2e8f0"
            >
                FARMAVALLIS
            </text>
            <text
                x="0"
                y="72"
                dominantBaseline="middle"
                fontSize="16"
                fontFamily="sans-serif"
                fill="#fbb01c"
                fontStyle="italic"
            >
                Cuidamos Tu Salud
            </text>
        </g>
    </svg>
);
