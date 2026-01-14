
import React from 'react';
import { SearchIcon } from './icons/SearchIcon';

interface SearchBarProps {
    query: string;
    onQueryChange: (query: string) => void;
    placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, onQueryChange, placeholder = "Buscar..." }) => {
    return (
        <div className="w-full max-w-2xl mx-auto mb-8">
            <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <SearchIcon className="h-5 w-5 text-slate-500" />
                </span>
                <input
                    type="search"
                    value={query}
                    onChange={(e) => onQueryChange(e.target.value)}
                    placeholder={placeholder}
                    className="w-full py-3 pl-10 pr-4 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-farmavallis-yellow focus:border-transparent transition-colors"
                    aria-label="Barra de búsqueda"
                />
            </div>
        </div>
    );
};

export default SearchBar;
