
import React from 'react';

const LoadingSpinner: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-2">
            <div className="w-12 h-12 border-4 border-farmavallis-blue border-t-transparent rounded-full animate-spin"></div>
            <p className="text-farmavallis-yellow">Cargando...</p>
        </div>
    );
};

export default LoadingSpinner;
