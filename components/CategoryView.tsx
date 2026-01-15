
import React, { useState } from 'react';
import type { DrugCategory, DrugInfo } from '../types';
import LoadingSpinner from './LoadingSpinner';
import { CategoryIllustration } from './CategoryIllustration';

interface CategoryViewProps {
    category: DrugCategory;
    activeIngredients: string[];
    selectedDrug: string | null;
    drugInfo: DrugInfo | null;
    isLoading: boolean;
    error: string | null;
    onSelectDrug: (drugName: string) => void;
    onBackToCategories: () => void;
    onBackToIngredients: () => void;
}

const DrugInfoDisplay: React.FC<{ info: DrugInfo }> = ({ info }) => {
    const [openAccordion, setOpenAccordion] = useState<string | null>('whatIsIt');

    const toggleAccordion = (key: string) => {
        setOpenAccordion(openAccordion === key ? null : key);
    };

    const sectionOrder: (keyof DrugInfo)[] = [
        'whatIsIt',
        'whenToUse',
        'presentation',
        'dosage',
        'precautions',
        'sideEffects',
        'interactions',
        'selfMedicationWarning'
    ];

    const titles: { [key in keyof DrugInfo]: string } = {
        whatIsIt: '¿Qué es?',
        whenToUse: '¿Cuándo usar?',
        presentation: 'Presentación',
        dosage: 'Dosificación',
        precautions: 'Precauciones y Contraindicaciones',
        sideEffects: 'Efectos Adversos/Secundarios',
        interactions: 'Interacciones con otros medicamentos',
        selfMedicationWarning: '¡Atención!',
    };

    return (
        <div className="space-y-2">
            {sectionOrder.map((key) => {
                const value = info[key];
                if (!value) return null;

                const isOpen = openAccordion === key;
                const isWarning = key === 'selfMedicationWarning';

                return (
                    <div key={key} className="border border-slate-700 rounded-lg overflow-hidden transition-all duration-300 bg-slate-800 shadow-md hover:shadow-lg">
                        <h3 id={`accordion-header-${key}`}>
                            <button
                                type="button"
                                onClick={() => toggleAccordion(key)}
                                className="flex justify-between items-center w-full p-4 font-semibold text-left text-slate-200 hover:bg-slate-700/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-farmavallis-blue transition-colors"
                                aria-expanded={isOpen}
                                aria-controls={`accordion-content-${key}`}
                            >
                                <span className={`text-lg ${isWarning ? 'text-red-400' : 'text-farmavallis-yellow'}`}>
                                    {titles[key]}
                                </span>
                                <svg
                                    className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>
                        </h3>
                        <div
                            id={`accordion-content-${key}`}
                            role="region"
                            aria-labelledby={`accordion-header-${key}`}
                            className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                        >
                            <div className="overflow-hidden">
                                <div className="p-4 border-t border-slate-700">
                                    <p className={`whitespace-pre-wrap ${isWarning ? 'text-red-300' : 'text-slate-300'}`}>
                                        {value}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};


const CategoryView: React.FC<CategoryViewProps> = ({
    category,
    activeIngredients,
    selectedDrug,
    drugInfo,
    isLoading,
    error,
    onSelectDrug,
    onBackToCategories,
    onBackToIngredients
}) => {
    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                 <button 
                    onClick={onBackToCategories} 
                    className="px-4 py-2 bg-slate-700 text-farmavallis-yellow rounded-lg hover:bg-slate-600 hover:text-white transition-all duration-200 ease-in-out shadow-md hover:shadow-lg transform hover:-translate-y-px active:translate-y-0 active:shadow-md text-sm font-medium"
                >
                    &larr; Volver a Categorías
                </button>
                 {selectedDrug && (
                     <button 
                        onClick={onBackToIngredients} 
                        className="px-4 py-2 bg-slate-700 text-farmavallis-yellow rounded-lg hover:bg-slate-600 hover:text-white transition-all duration-200 ease-in-out shadow-md hover:shadow-lg transform hover:-translate-y-px active:translate-y-0 active:shadow-md text-sm font-medium"
                    >
                        Volver a Principios Activos
                    </button>
                 )}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-center sm:text-left">
                <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0">
                    <CategoryIllustration categoryId={category.id} className="w-full h-full" />
                </div>
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-farmavallis-yellow">{selectedDrug || category.name}</h2>
                    {selectedDrug && <p className="text-xl md:text-2xl text-farmavallis-blue -mt-1">{category.name}</p>}
                </div>
            </div>
            
            {error && <div className="text-center text-red-400 bg-red-900/30 p-4 rounded-md my-4">{error}</div>}

            {isLoading && <div className="flex justify-center my-8"><LoadingSpinner /></div>}

            {!isLoading && !error && (
                <>
                    {drugInfo ? (
                        <DrugInfoDisplay info={drugInfo} />
                    ) : (
                        <div>
                            <p className="text-center text-slate-400 mb-6">Selecciona un principio activo para ver su información detallada.</p>
                            <div className="flex flex-wrap justify-center gap-3">
                                {activeIngredients.length > 0 ? (
                                    activeIngredients.map((ingredient) => (
                                        <button
                                            key={ingredient}
                                            onClick={() => onSelectDrug(ingredient)}
                                            className="px-5 py-2 text-white font-semibold rounded-full shadow-md bg-gradient-to-br from-blue-400 to-farmavallis-blue transition-all duration-300 ease-in-out transform hover:-translate-y-px hover:shadow-lg hover:text-farmavallis-yellow hover:from-farmavallis-blue hover:to-blue-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-farmavallis-dark focus:ring-farmavallis-yellow active:translate-y-0 active:shadow-md active:brightness-95"
                                        >
                                            {ingredient}
                                        </button>
                                    ))
                                ) : (
                                    <p className="text-slate-500">No se encontraron principios activos para esta categoría.</p>
                                )}
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default CategoryView;
