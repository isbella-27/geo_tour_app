
export type ContactForm = {
    id: number;
    name: string;
    email?: string;
    phoneNumber?: string;
    subject?: 'Demande d\'informations ' | 'Réservations' | 'Circuit personnalisé' | 'Voyage de groupe' | 'Autres'
    message?: string;

}