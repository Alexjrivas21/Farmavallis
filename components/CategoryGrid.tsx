
import React from 'react';
import type { DrugCategory } from '../types';
import { ShareIcon } from './icons/ShareIcon';
import { CategoryIllustration } from './CategoryIllustration';

interface CategoryGridProps {
    categories: DrugCategory[];
    onSelectCategory: (category: DrugCategory) => void;
    searchQuery: string;
}

const CategoryCard: React.FC<{ category: DrugCategory; onSelect: () => void }> = ({ category, onSelect }) => {
    const handleShare = async (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent triggering the card's onSelect
        const shareData = {
            title: `Farmavallis: ${category.name}`,
            text: `Consulta información sobre ${category.name} en la guía farmacológica de Farmavallis.`,
            url: window.location.href
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.error('Error al compartir:', err);
            }
        } else {
            alert('La función de compartir no está disponible en este navegador.');
        }
    };


    return (
        <div
            onClick={onSelect}
            className="group relative flex flex-col items-center justify-start text-center rounded-lg shadow-lg bg-slate-800 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-farmavallis-blue/40 hover:-translate-y-1 hover:bg-[radial-gradient(ellipse_at_center,_#2563eb,_#104b90)] overflow-hidden p-4"
            role="button"
            aria-label={`Seleccionar categoría ${category.name}`}
        >
            <div className="w-16 h-16 mb-3 flex items-center justify-center">
                 <CategoryIllustration categoryId={category.id} className="w-full h-full object-contain" />
            </div>
            <h3 className="text-sm font-semibold text-white leading-tight flex-grow flex items-center justify-center group-hover:text-farmavallis-yellow transition-colors duration-300">
                {category.name}
            </h3>
            {navigator.share && (
                 <button
                    onClick={handleShare}
                    className="absolute top-2 right-2 p-1.5 rounded-full bg-slate-900/50 text-white hover:bg-farmavallis-blue transition-all duration-200 ease-in-out opacity-0 group-hover:opacity-100 shadow-md hover:shadow-lg transform hover:-translate-y-px active:translate-y-0 active:shadow-md"
                    aria-label={`Compartir categoría ${category.name}`}
                    title="Compartir"
                >
                    <ShareIcon className="w-4 h-4" />
                </button>
            )}
        </div>
    );
};

const CategoryGrid: React.FC<CategoryGridProps> = ({ categories, onSelectCategory, searchQuery }) => {
    return (
        <div>
            {!searchQuery && (
                <h2 className="text-2xl font-bold text-center mb-8 text-farmavallis-blue">Selecciona un Grupo de Medicamentos</h2>
            )}
            {categories.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                    {categories.map((category) => (
                        <CategoryCard key={category.id} category={category} onSelect={() => onSelectCategory(category)} />
                    ))}
                </div>
            ) : (
                searchQuery && (
                    <div className="text-center py-10">
                        <p className="text-slate-400 text-lg">No se encontraron resultados para "{searchQuery}"</p>
                    </div>
                )
            )}
        </div>
    );
};

export default CategoryGrid;
