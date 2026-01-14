
import React from 'react';
import { TiktokIcon } from './icons/TiktokIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import { WhatsappIcon } from './icons/WhatsappIcon';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-slate-300 py-6 mt-auto">
            <div className="container mx-auto px-4 flex flex-wrap justify-center sm:justify-between items-center gap-4">
                {/* Main Info */}
                <div className="text-center sm:text-left">
                    <div className="mb-2">
                        <p className="font-bold text-lg text-farmavallis-blue">FARMAVALLIS</p>
                        <p className="text-sm">Valle Guanape, Anzoátegui, Venezuela</p>
                    </div>
                    <div className="flex justify-center sm:justify-start items-center space-x-6">
                        <a href="https://www.tiktok.com/@farmavallis" target="_blank" rel="noopener noreferrer" className="hover:text-farmavallis-yellow transition-all duration-200 ease-in-out transform hover:scale-125 hover:drop-shadow-[0_2px_4px_rgba(251,176,28,0.4)]">
                            <TiktokIcon className="h-6 w-6" />
                            <span className="sr-only">Tiktok</span>
                        </a>
                        <a href="https://www.instagram.com/farmavallis" target="_blank" rel="noopener noreferrer" className="hover:text-farmavallis-yellow transition-all duration-200 ease-in-out transform hover:scale-125 hover:drop-shadow-[0_2px_4px_rgba(251,176,28,0.4)]">
                            <InstagramIcon className="h-6 w-6" />
                            <span className="sr-only">Instagram</span>
                        </a>
                        <a href="https://wa.me/584122182962" target="_blank" rel="noopener noreferrer" className="hover:text-farmavallis-yellow transition-all duration-200 ease-in-out transform hover:scale-125 hover:drop-shadow-[0_2px_4px_rgba(251,176,28,0.4)]">
                            <WhatsappIcon className="h-6 w-6" />
                            <span className="sr-only">Whatsapp</span>
                        </a>
                    </div>
                </div>
                {/* Designer Credit */}
                <div>
                    <p className="text-xs text-slate-500">Diseño: A.Rivas</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
