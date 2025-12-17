import type { Destination } from "../../data/models/destination";
// ❌ Suppression de l'import Hebergement inutile, ou s'assurer qu'il n'y en a pas besoin
// import type { Hebergement } from "../../data/models/hebergement"; 
import axiosInstance from "../axios_instance";

export const destinationApi = {
    // 1. Lire tout (Index)
    getAll: async (): Promise<Destination[]> => {
        const response = await axiosInstance.get('/destinations');
        return response.data; // Retourne directement le tableau des destinations
    },

    // 2. Créer (Store)
    // Retourne un seul objet Destination (statut 201)
    create: async (formData: FormData): Promise<Destination> => {
        const response = await axiosInstance.post('/destinations', formData);
        // Utilise response.data.data car Laravel retourne { message, data } pour 'store'
        return response.data.data; 
    },

    // 3. Supprimer (Destroy)
    destroy: async (id: number): Promise<void> => {
        await axiosInstance.delete(`/destinations/${id}`);
    },

    // 4. Mettre à jour (Update)
    // Retourne un seul objet Destination mis à jour
    update: async (id: number, formData: FormData): Promise<Destination> => {
        // Ajout du champ factice _method pour gérer les fichiers via POST à une route PUT/PATCH
        formData.append('_method', 'PUT'); 
        
        const response = await axiosInstance.post(`/destinations/${id}`, formData);
        // Utilise response.data.data car Laravel retourne { message, data } pour 'update'
        return response.data.data; 
    },

    // 5. Lire un seul (Show)
    // 🔑 CORRECTION CLÉ : Le type de retour doit être Destination, pas Hebergement
    read: async (id: number): Promise<Destination> => {
        const response = await axiosInstance.get(`/destinations/${id}`);
        // La méthode show() de Laravel retourne directement l'objet
        return response.data; 
    },
}