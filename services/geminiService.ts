import { GoogleGenAI, Type } from '@google/genai';
import type { DrugInfo } from '../types';

if (!process.env.API_KEY) {
    throw new Error("La clave de API de Google AI no se encontró en las variables de entorno. Por favor, configure la variable de entorno API_KEY.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const drugInfoSchema = {
    type: Type.OBJECT,
    properties: {
        whatIsIt: { type: Type.STRING, description: '¿Qué es?' },
        whenToUse: { type: Type.STRING, description: '¿Cuándo usar? (Indicaciones)' },
        presentation: { type: Type.STRING, description: 'Presentación (e.g., tabletas, jarabe, inyección)' },
        dosage: { type: Type.STRING, description: 'Dosificación (Guías generales de dosificación)' },
        precautions: { type: Type.STRING, description: 'Precauciones y contraindicaciones' },
        sideEffects: { type: Type.STRING, description: 'Efectos adversos/secundarios' },
        interactions: { type: Type.STRING, description: '¿Con qué otro medicamento no se debe combinar?' },
        selfMedicationWarning: { type: Type.STRING, description: 'Mensaje de evitar automedicación. Debe ser una advertencia clara y contundente.' }
    },
    required: ['whatIsIt', 'whenToUse', 'presentation', 'dosage', 'precautions', 'sideEffects', 'interactions', 'selfMedicationWarning']
};

const activeIngredientsSchema = {
    type: Type.OBJECT,
    properties: {
        principiosActivos: {
            type: Type.ARRAY,
            items: {
                type: Type.STRING
            }
        }
    },
    required: ['principiosActivos']
};

export const getDrugInfo = async (drugName: string): Promise<DrugInfo> => {
    const prompt = `Proporcione información farmacológica detallada para el principio activo "${drugName}" en español. Estructure la respuesta como un objeto JSON que coincida con el esquema proporcionado. Asegúrese de que todos los campos estén poblados con información precisa y concisa, adecuada para una audiencia general. Incluya una advertencia clara sobre los peligros de la automedicación.`;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: prompt,
            config: {
                responseMimeType: 'application/json',
                responseSchema: drugInfoSchema,
            },
        });

        const jsonString = response.text.trim();
        const parsedJson = JSON.parse(jsonString);
        return parsedJson as DrugInfo;
    } catch (error) {
        console.error(`Error fetching info for ${drugName}:`, error);
        throw new Error(`Failed to fetch drug information for ${drugName}.`);
    }
};


export const getActiveIngredients = async (categoryName: string): Promise<string[]> => {
    // Lógica personalizada para forzar la categoría del ácido acetilsalicílico según requerimiento del usuario
    let specialRule = "";
    const lowerCategory = categoryName.toLowerCase();
    
    if (lowerCategory.includes("analgésicos")) {
        specialRule = " IMPORTANTE: Debes incluir obligatoriamente el 'ácido acetilsalicílico' en esta lista de analgésicos.";
    } else if (lowerCategory.includes("antiagregante")) {
        specialRule = " IMPORTANTE: NO incluyas el 'ácido acetilsalicílico' en esta lista, ya que ahora pertenece exclusivamente a la categoría de Analgésicos.";
    }

    const prompt = `Enumere entre 5 y 10 principios activos comunes para la categoría de medicamentos "${categoryName}" en español.${specialRule} Devuelva el resultado como un objeto JSON con una única clave "principiosActivos" que sea un array de strings.`;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: prompt,
            config: {
                responseMimeType: 'application/json',
                responseSchema: activeIngredientsSchema,
            },
        });

        const jsonString = response.text.trim();
        const parsedJson = JSON.parse(jsonString);
        return parsedJson.principiosActivos || [];
    } catch (error) {
        console.error(`Error fetching active ingredients for ${categoryName}:`, error);
        throw new Error(`Failed to fetch active ingredients for ${categoryName}.`);
    }
};