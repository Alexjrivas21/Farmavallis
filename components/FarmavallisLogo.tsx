import React from 'react';

const FarmavallisLogo: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex flex-row justify-center items-center gap-4">
                <svg
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-20 h-20 md:w-24 md:h-24 object-contain"
                    aria-label="Icono de una cruz dorada en 3D sobre una esfera azul"
                >
                    <defs>
                        {/* --- Sphere Gradient --- */}
                        <radialGradient id="blueSphereGradient" cx="40%" cy="40%" r="50%" fx="30%" fy="30%">
                            <stop offset="0%" stopColor="#60a5fa" />
                            <stop offset="50%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#1e40af" />
                        </radialGradient>
                        
                        {/* --- Gradients for the Cross --- */}
                        <linearGradient id="yellowCrossFront" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#fde047" />
                            <stop offset="100%" stopColor="#fbb01c" />
                        </linearGradient>
                        <linearGradient id="yellowCrossSide" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#facc15" />
                            <stop offset="100%" stopColor="#d97706" />
                        </linearGradient>
                        <linearGradient id="yellowCrossTop" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#fef08a" />
                            <stop offset="100%" stopColor="#fde047" />
                        </linearGradient>

                        {/* --- Filters for Shadows --- */}
                         <filter id="sphereShadow" x="-50%" y="-50%" width="200%" height="200%">
                            <feDropShadow dx="-8" dy="8" stdDeviation="10" floodColor="#000000" floodOpacity="0.7" />
                        </filter>
                        <filter id="crossFloatingShadow" x="-50%" y="-50%" width="200%" height="200%">
                            <feDropShadow dx="-8" dy="8" stdDeviation="8" floodColor="#000000" floodOpacity="0.4" />
                        </filter>
                    </defs>
                    
                    {/* Blue Sphere - Rendered behind the cross */}
                    <circle cx="55" cy="55" r="40" fill="url(#blueSphereGradient)" filter="url(#sphereShadow)" />


                    {/* --- Cross Icon Group --- */}
                    <g transform="translate(2.3, -8.9) scale(0.875)" filter="url(#crossFloatingShadow)">
                        {/* Depth faces */}
                        <polygon points="60,35 65,30 85,30 80,35" fill="url(#yellowCrossTop)" />
                        <polygon points="80,35 85,30 85,50 80,55" fill="url(#yellowCrossSide)" />
                        <polygon points="80,55 85,50 105,50 100,55" fill="url(#yellowCrossTop)" />
                        <polygon points="100,55 105,50 105,70 100,75" fill="url(#yellowCrossSide)" />
                        <polygon points="80,95 85,90 65,90 60,95" fill="url(#yellowCrossSide)" />
                        
                        {/* Front Face */}
                        <path d="M 60,35 H 80 V 55 H 100 V 75 H 80 V 95 H 60 V 75 H 40 V 55 H 60 Z" fill="url(#yellowCrossFront)"/>
                    </g>
                </svg>

                <div className="text-left">
                    <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide" style={{ fontFamily: 'Arial, sans-serif' }}>
                        FARMAVALLIS
                    </h1>
                    <p className="text-lg md:text-xl italic text-farmavallis-yellow" style={{ fontFamily: "'Brush Script MT', cursive, sans-serif", textShadow: '-2px 3px 6px rgba(0, 0, 0, 0.6)' }}>
                        Cuidamos tu salud
                    </p>
                </div>
            </div>

            <p className="text-white text-xl md:text-2xl text-center italic">
                "Tu Guía Farmacológica de Confianza"
            </p>
        </div>
    );
};

export default FarmavallisLogo;