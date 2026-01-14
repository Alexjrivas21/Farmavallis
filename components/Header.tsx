
import React from 'react';
import { FarmavallisLogo } from './FarmavallisLogo';

const Header: React.FC = () => {
    return (
        <header className="bg-farmavallis-dark py-6">
            <div className="container mx-auto flex flex-col items-center justify-center text-center">
                <div className="w-full max-w-sm mb-2">
                    <FarmavallisLogo />
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-slate-300 tracking-wide mt-2">
                    Tu Guía Farmacológica de Confianza
                </h1>
            </div>
        </header>
    );
};

export default Header;
