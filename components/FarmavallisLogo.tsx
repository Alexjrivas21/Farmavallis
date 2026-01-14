import React from 'react';

const FarmavallisLogo: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-4">
            <svg
                viewBox="0 0 420 100"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto max-w-[300px] md:max-w-[400px]"
                aria-label="Logotipo de Farmavallis"
            >
                <defs>
                    {/* Degradado para el círculo azul */}
                    <radialGradient id="blueCircleGradient" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
                        <stop offset="0%" stopColor="#60a5fa" />
                        <stop offset="100%" stopColor="#104b90" />
                    </radialGradient>
                    
                    {/* Degradado para la cruz amarilla */}
                    <linearGradient id="yellowCrossGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#fde047" />
                        <stop offset="100%" stopColor="#fbb01c" />
                    </linearGradient>

                    {/* Filtro para la sombra y relieve de la cruz */}
                    <filter id="crossShadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="2" dy="3" stdDeviation="2" floodColor="#000000" floodOpacity="0.4" />
                    </filter>
                </defs>

                {/* --- ICONO --- */}
                <g transform="translate(15, 15) scale(0.7)">
                    {/* Círculo de fondo */}
                    <circle cx="50" cy="50" r="48" fill="url(#blueCircleGradient)" />
                    
                    {/* Cruz con sombra y relieve */}
                    <g filter="url(#crossShadow)">
                        <path
                            d="M 42,20 H 58 V 42 H 80 V 58 H 58 V 80 H 42 V 58 H 20 V 42 H 42 Z"
                            fill="url(#yellowCrossGradient)"
                            stroke="#0a192f" 
                            strokeWidth="3"
                            strokeLinejoin="round"
                        />
                    </g>
                </g>

                {/* --- TEXTO --- */}
                <g>
                    {/* FARMAVALLIS */}
                    <text
                        x="115"
                        y="58"
                        fontFamily="Arial, sans-serif"
                        fontSize="38"
                        fontWeight="bold"
                        fill="white"
                        className="tracking-wide"
                    >
                        FARMAVALLIS
                    </text>
                    {/* Cuidamos tu salud */}
                    <text
                        x="118"
                        y="82"
                        fontFamily="'Brush Script MT', cursive, sans-serif"
                        fontSize="22"
                        fontStyle="italic"
                        fill="#fbb01c"
                    >
                        Cuidamos tu salud
                    </text>
                </g>
            </svg>
            <p className="text-white text-2xl text-center italic">
                "Tu Guía Farmacológica de Confianza"
            </p>
        </div>
    );
};

export default FarmavallisLogo;