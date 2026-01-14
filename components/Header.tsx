import React from 'react';
import FarmavallisLogo from './FarmavallisLogo';

const Header: React.FC = () => {
    return (
        <header className="bg-farmavallis-dark py-4">
            <div className="container mx-auto px-4">
                <FarmavallisLogo />
            </div>
        </header>
    );
};

export default Header;