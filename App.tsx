
import React, { useState, useCallback, useMemo, useEffect } from 'react';
import type { DrugCategory, DrugInfo, SearchResultItem, IngredientSearchResult } from './types';
import { drugCategories } from './constants/drugCategories';
import { getDrugInfo, getActiveIngredients, searchActiveIngredients } from './services/geminiService';
import Header from './components/Header';
import Footer from './components/Footer';
import CategoryGrid from './components/CategoryGrid';
import CategoryView from './components/CategoryView';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

const App: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<DrugCategory | null>(null);
    const [activeIngredients, setActiveIngredients] = useState<string[]>([]);
    const [selectedDrug, setSelectedDrug] = useState<string | null>(null);
    const [drugInfo, setDrugInfo] = useState<DrugInfo | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<SearchResultItem[]>([]);
    const [isSearching, setIsSearching] = useState(false);

    const handleBackToCategories = useCallback(() => {
        setSelectedCategory(null);
        setSelectedDrug(null);
        setDrugInfo(null);
        setActiveIngredients([]);
        setError(null);
        setSearchQuery('');
    }, []);
    
    useEffect(() => {
        const handler = setTimeout(async () => {
            if (searchQuery.trim().length > 1) {
                setIsSearching(true);
                setError(null);

                // Búsqueda local de categorías
                const categoryResults: SearchResultItem[] = drugCategories
                    .filter(category =>
                        category.name.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map(cat => ({ type: 'category', data: cat }));

                // Búsqueda de principios activos con Gemini
                try {
                    const ingredientResultsData = await searchActiveIngredients(searchQuery);
                    const ingredientResults: SearchResultItem[] = ingredientResultsData.map(ing => ({ type: 'ingredient', data: ing }));
                    
                    setSearchResults([...categoryResults, ...ingredientResults]);
                } catch (err) {
                    console.error("Search error:", err);
                    setError("Error al realizar la búsqueda.");
                    setSearchResults(categoryResults); // Mostrar al menos los resultados de categoría
                } finally {
                    setIsSearching(false);
                }
            } else {
                setSearchResults([]);
            }
        }, 500); // Debounce de 500ms

        return () => {
            clearTimeout(handler);
        };
    }, [searchQuery]);

    const handleSearchChange = (query: string) => {
        setSearchQuery(query);
    };

    const handleSelectCategory = useCallback(async (category: DrugCategory) => {
        setSearchQuery('');
        setSearchResults([]);
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

    const handleSelectIngredientFromSearch = useCallback(async (searchResult: IngredientSearchResult) => {
        const category = drugCategories.find(c => c.name === searchResult.category);
        if (category) {
            setSearchQuery('');
            setSearchResults([]);
            setSelectedCategory(category);
            // Pre-selecciona el fármaco y comienza a cargar su información
            await handleSelectDrug(searchResult.ingredient);
            // También carga la lista completa de ingredientes de la categoría en segundo plano
            try {
                const ingredients = await getActiveIngredients(category.name);
                setActiveIngredients(ingredients);
            } catch (err) {
                console.error("Error fetching active ingredients in background:", err);
                // No mostrar este error al usuario para no interrumpir el flujo principal
            }
        } else {
            setError(`No se pudo encontrar la categoría "${searchResult.category}".`);
        }
    }, [handleSelectDrug]);

    const handleBackToIngredients = useCallback(() => {
        setSelectedDrug(null);
        setDrugInfo(null);
        setError(null);
    }, []);

    const renderContent = () => {
        if (searchQuery) {
            return (
                <SearchResults
                    results={searchResults}
                    isLoading={isSearching}
                    query={searchQuery}
                    onSelectCategory={handleSelectCategory}
                    onSelectIngredient={handleSelectIngredientFromSearch}
                />
            );
        }
        if (selectedCategory) {
            const filteredActiveIngredients = activeIngredients; // Búsqueda dentro de categoría eliminada
            return (
                <CategoryView
                    category={selectedCategory}
                    activeIngredients={filteredActiveIngredients}
                    selectedDrug={selectedDrug}
                    drugInfo={drugInfo}
                    isLoading={isLoading}
                    error={error}
                    searchQuery={''} // Se pasa string vacío
                    onSelectDrug={handleSelectDrug}
                    onBackToCategories={handleBackToCategories}
                    onBackToIngredients={handleBackToIngredients}
                />
            );
        }
        return (
            <CategoryGrid
                categories={drugCategories}
                onSelectCategory={handleSelectCategory}
                searchQuery={searchQuery}
            />
        );
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="container mx-auto px-4 py-8 flex-grow">
                <SearchBar
                    query={searchQuery}
                    onQueryChange={handleSearchChange}
                    placeholder="Buscar categoría o principio activo..."
                />
                {renderContent()}
            </main>
            <Footer />
        </div>
    );
};

export default App;