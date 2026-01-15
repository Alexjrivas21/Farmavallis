
export interface DrugCategory {
    id: string;
    name: string;
}

export interface DrugInfo {
    whatIsIt: string;
    whenToUse: string;
    presentation: string;
    dosage: string;
    precautions: string;
    sideEffects: string;
    interactions: string;
    selfMedicationWarning: string;
}

export interface IngredientSearchResult {
    ingredient: string;
    category: string;
}

export type SearchResultItem = 
    | { type: 'category'; data: DrugCategory }
    | { type: 'ingredient'; data: IngredientSearchResult };