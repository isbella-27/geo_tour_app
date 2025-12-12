export type Hebergement = {
    id: number;
    title: string;          
    location: string;       
    rating: number;         
    price: string;               
    description?: string;    
    features: string[];           
    image?: string | null;  
    type?: 'Hôtels' | 'Lodges Écologiques' | 'Auberges' | 'Stations balnéaires'; 
    
    created_at: string;
    updated_at: string;
};