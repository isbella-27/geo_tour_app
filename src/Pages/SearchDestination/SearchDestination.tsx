import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchDestination.css'; // Assurez-vous d'avoir créé ce fichier CSS

interface SearchDestinationProps {
    // Fonction callback pour envoyer les valeurs au composant parent (Destination.tsx)
    onSearch: (searchTerm: string, region: string) => void;
    
    // Liste des régions uniques disponibles (fournie par Destination.tsx)
    availableRegions: string[]; 
    
    // Valeurs initiales (pour maintenir l'état du filtre lors du rechargement)
    initialSearchTerm?: string;
    initialRegion?: string;
}

// Les tags de recherche populaire affichés en bas
const POPULAR_SEARCHES = ['cascade', 'plage', 'marché', 'montagne', 'village', 'parc national', 'colonial'];

export default function SearchDestination({ onSearch, availableRegions, initialSearchTerm = '', initialRegion = 'Toutes les régions' }: SearchDestinationProps) {
    
    // États locaux pour gérer les valeurs des champs d'entrée
    const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
    const [selectedRegion, setSelectedRegion] = useState(initialRegion);

    // --- Gestionnaires d'événements ---

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSearchTerm = e.target.value;
        setSearchTerm(newSearchTerm);
        // Déclenche la recherche dans le composant parent
        onSearch(newSearchTerm, selectedRegion);
    };

    const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newRegion = e.target.value;
        setSelectedRegion(newRegion);
        // Déclenche la recherche dans le composant parent
        onSearch(searchTerm, newRegion);
    };
    
    const handlePopularSearchClick = (tag: string) => {
        // Si le tag est déjà le terme de recherche, on efface (dé-sélectionne)
        const newSearchTerm = searchTerm === tag ? '' : tag;
        setSearchTerm(newSearchTerm);
        // Déclenche la recherche
        onSearch(newSearchTerm, selectedRegion);
    };


    return (
        <div className="search-destination-container">
            <h2>Trouvez votre destination idéale</h2>
            
            <div className="search-controls">
                
                {/* 1. Recherche par Nom, Site ou Activité */}
                <div className="search-input-group">
                    <label>Rechercher par nom, site ou activité</label>
                    <div className="input-with-icon">
                        <FaSearch className="search-icon" />
                        <input
                            type="text"
                            placeholder="Ex: cascade, marché, plage, mont agou..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>

                {/* 2. Filtrer par Région */}
                <div className="filter-select-group">
                    <label>Filtrer par région</label>
                    <select value={selectedRegion} onChange={handleRegionChange}>
                        <option value="Toutes les régions">Toutes les régions</option>
                        {availableRegions.map(region => (
                            <option key={region} value={region}>{region}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* 3. Recherches Populaires */}
            <div className="popular-searches">
                <label>Recherches populaires :</label>
                <div>
                    {POPULAR_SEARCHES.map(tag => (
                        <button 
                            key={tag} 
                            // Ajoute la classe 'active' si ce tag est le terme de recherche actuel
                            className={`tag-button ${searchTerm === tag ? 'active' : ''}`}
                            onClick={() => handlePopularSearchClick(tag)}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}