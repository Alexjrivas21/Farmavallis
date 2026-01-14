
import React, { useState, useCallback, useMemo } from 'react';
import type { DrugCategory, DrugInfo } from './types';
import { drugCategories } from './constants/drugCategories';
import { getDrugInfo, getActiveIngredients } from './services/geminiService';
import Header from './components/Header';
import Footer from './components/Footer';
import CategoryGrid from './components/CategoryGrid';
import CategoryView from './components/CategoryView';
import SearchBar from './components/SearchBar';

const App: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<DrugCategory | null>(null);
    const [activeIngredients, setActiveIngredients] = useState<string[]>([]);
    const [selectedDrug, setSelectedDrug] = useState<string | null>(null);
    const [drugInfo, setDrugInfo] = useState<DrugInfo | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const handleBackToCategories = useCallback(() => {
        setSelectedCategory(null);
        setSelectedDrug(null);
        setDrugInfo(null);
        setActiveIngredients([]);
        setError(null);
    }, []);

    const handleSearchChange = (query: string) => {
        setSearchQuery(query);
        if (query && selectedCategory) {
            handleBackToCategories();
        }
    };

    const handleSelectCategory = useCallback(async (category: DrugCategory) => {
        setSearchQuery('');
        setSelectedCategory(category);
        setSelectedDrug(null);
        setDrugInfo(null);
        setActiveIngredients([]);
        setIsLoading(true);
        setError(null);
        try {
            const ingredients = await getActiveIngredients(category.name);
            setActiveIngredients(ingredients);
        } catch (err) {
            console.error("Error fetching active ingredients:", err);
            setError("No se pudieron cargar los principios activos. Inténtelo de nuevo.");
        } finally {
            setIsLoading(false);
        }
    }, []);

    const handleSelectDrug = useCallback(async (drugName: string) => {
        setSelectedDrug(drugName);
        setDrugInfo(null);
        setIsLoading(true);
        setError(null);
        try {
            const info = await getDrugInfo(drugName);
            setDrugInfo(info);
        } catch (err) {
            console.error("Error fetching drug info:", err);
            setError("No se pudo cargar la información del medicamento. Inténtelo de nuevo.");
        } finally {
            setIsLoading(false);
        }
    }, []);

    const handleBackToIngredients = useCallback(() => {
        setSelectedDrug(null);
        setDrugInfo(null);
        setError(null);
    }, []);

    const filteredCategories = useMemo(() => {
        if (!searchQuery) return drugCategories;
        return drugCategories.filter(category =>
            category.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="container mx-auto px-4 py-8 flex-grow">
                <SearchBar
                    query={searchQuery}
                    onQueryChange={handleSearchChange}
                    placeholder="Buscar categorías..."
                />

                {selectedCategory ? (
                    <CategoryView
                        category={selectedCategory}
                        activeIngredients={activeIngredients}
                        selectedDrug={selectedDrug}
                        drugInfo={drugInfo}
                        isLoading={isLoading}
                        error={error}
                        onSelectDrug={handleSelectDrug}
                        onBackToCategories={handleBackToCategories}
                        onBackToIngredients={handleBackToIngredients}
                    />
                ) : (
                    <CategoryGrid
                        categories={filteredCategories}
                        onSelectCategory={handleSelectCategory}
                        searchQuery={searchQuery}
                    />
                )}
            </main>
            <Footer />
        </div>
    );
};

export default App;
