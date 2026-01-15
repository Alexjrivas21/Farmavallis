
import React from 'react';
import type { SearchResultItem, DrugCategory, IngredientSearchResult } from '../types';
import LoadingSpinner from './LoadingSpinner';
import { CategoryIllustration } from './CategoryIllustration';

interface SearchResultsProps {
    results: SearchResultItem[];
    isLoading: boolean;
    query: string;
    onSelectCategory: (category: DrugCategory) => void;
    onSelectIngredient: (ingredient: IngredientSearchResult) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, isLoading, query, onSelectCategory, onSelectIngredient }) => {
    if (isLoading) {
        return (
            <div className="flex justify-center my-8">
                <LoadingSpinner />
            </div>
        );
    }

    if (results.length === 0 && query) {
        return (
            <div className="text-center py-10">
                <p className="text-slate-400 text-lg">No se encontraron resultados para "{query}"</p>
            </div>
        );
    }

    return (
        <div className="w-full max-w-2xl mx-auto">
             <h2 className="text-xl font-bold text-center mb-6 text-farmavallis-blue">Resultados de la Búsqueda</h2>
             <div className="space-y-3">
                {results.map((item, index) => {
                    if (item.type === 'category') {
                        return (
                             <button
                                key={`cat-${item.data.id}-${index}`}
                                onClick={() => onSelectCategory(item.data)}
                                className="w-full flex items-center gap-4 p-3 rounded-lg bg-slate-800 hover:bg-slate-700/70 transition-colors duration-200 text-left"
                            >
                                <div className="w-12 h-12 flex-shrink-0">
                                    <CategoryIllustration categoryId={item.data.id} className="w-full h-full" />
                                </div>
                                <div>
                                    <span className="font-semibold text-white">{item.data.name}</span>
                                    <span className="block text-xs text-farmavallis-yellow uppercase tracking-wider">Categoría</span>
                                </div>
                            </button>
                        );
                    } else { // ingredient
                        return (
                            <button
                                key={`ing-${item.data.ingredient}-${index}`}
                                onClick={() => onSelectIngredient(item.data)}
                                className="w-full flex items-center gap-4 p-3 rounded-lg bg-slate-800 hover:bg-slate-700/70 transition-colors duration-200 text-left"
                            >
                                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-farmavallis-blue rounded-md">
                                     <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="font-semibold text-white">{item.data.ingredient}</span>
                                    <span className="block text-xs text-farmavallis-yellow uppercase tracking-wider">Principio Activo &bull; {item.data.category}</span>
                                </div>
                            </button>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default SearchResults;
