import type { Hebergement } from "../../data/models/hebergement";
import axiosInstance from "../axios_instance";

export const hebergementApi = {
    // 1. Lire tout (Index)
    getAll: async (): Promise<Hebergement[]> => {
        const response = await axiosInstance.get('/hebergements');
        return response.data;
    },

    // 2. Créer (Store)
    // Retourne un seul objet Hebergement (statut 201)
    create: async (formData: FormData): Promise<Hebergement> => {
        const response = await axiosInstance.post('/hebergements', formData);
        return response.data.data; // Votre API renvoie { message: ..., data: Hebergement }
    },

    // 3. Supprimer (Destroy)
    // Retourne un message de succès, pas un tableau
    destroy: async (id: number): Promise<void> => {
        await axiosInstance.delete(`/hebergements/${id}`);
        // Ne retourne rien, car le statut 200/204 suffit
    },

    // 4. Mettre à jour (Update)
    // 🚨 Correction : Utilisation de POST avec _method=PUT pour gérer les FormData/fichiers
    // Retourne un seul objet Hebergement mis à jour
    update: async (id: number, formData: FormData): Promise<Hebergement> => {
        // Ajout du champ factice _method
        formData.append('_method', 'PUT'); 
        
        // Envoi en POST à la route PUT/PATCH
        const response = await axiosInstance.post(`/hebergements/${id}`, formData);
        return response.data.data; // Votre API renvoie { message: ..., data: Hebergement }
    },

    // 5. Lire un seul (Show)
    // Retourne un seul objet Hebergement
    read: async (id: number): Promise<Hebergement> => {
        const response = await axiosInstance.get(`/hebergements/${id}`);
        return response.data;
    },
}