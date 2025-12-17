import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
// Importation des icônes de React Icons
import { FaMapMarkerAlt, FaRegCalendarAlt, FaStore, FaPagelines, FaLandmark, FaMountain, FaCoffee, FaSafari, FaTree, FaWater } from 'react-icons/fa';
import { MdOutlineArchitecture, MdMuseum, MdPool, MdLandscape } from 'react-icons/md';

// Import du composant de recherche
import SearchDestination from '../SearchDestination/SearchDestination';

// 🚀 IMPORTATIONS CLÉS POUR L'API
import type { Destination as APIDestinationType } from '../../data/models/destination';
import { destinationApi } from '../../api/destinations/crud_destination';

import './Destination.css';

// --- Fonction utilitaire pour rendre les icônes (inchangée) ---

const getIconForFeature = (feature: string): JSX.Element => {
    const lowerFeature = feature.toLowerCase();
    
    if (lowerFeature.includes('plage') || lowerFeature.includes('côtière')) return <MdPool />;
    if (lowerFeature.includes('marché') || lowerFeature.includes('boutique')) return <FaStore />;
    if (lowerFeature.includes('cascade') || lowerFeature.includes('eau')) return <FaWater />;
    if (lowerFeature.includes('montagne') || lowerFeature.includes('agou')) return <FaMountain />;
    if (lowerFeature.includes('forêt') || lowerFeature.includes('arbre')) return <FaTree />;
    if (lowerFeature.includes('musée') || lowerFeature.includes('historique')) return <MdMuseum />;
    
    return <FaLandmark />; // Icône par défaut
};

// --------------------------------------------------------------------------------------

const AVAILABLE_REGIONS = [
    "Maritime", "Plateaux", "Centrale", "Kara", "Savanes",
];

// --- Composant Principal ---
export default function Destination() {
    const [allDestinations, setAllDestinations] = useState<APIDestinationType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('Toutes les régions');

    // 🚀 FONCTION DE CHARGEMENT DE L'API AVEC CORRECTION TEMPORAIRE
    const fetchDestinations = async () => {
        try {
            setLoading(true);
            const data = await destinationApi.getAll();
            
            // 🚨 DÉBUT DU CORRECTIF TEMPORAIRE
            const processedData = data.map((dest: APIDestinationType) => {
                let poi = dest.pointsOfInterest;

                // 1. Vérifie si pointsOfInterest est une chaîne (JSON brut non décodé par Laravel)
                if (typeof poi === 'string') {
                    try {
                        // Tente de décoder la chaîne en tableau JavaScript
                        poi = JSON.parse(poi);
                    } catch (e) {
                        // Si le parsing échoue (pas du JSON valide), initialise à vide
                        console.error("Erreur de parsing JSON pour pointsOfInterest:", e);
                        poi = [];
                    }
                }
                
                // 2. Assure que le résultat est toujours un tableau valide pour .map()
                if (!Array.isArray(poi)) {
                    poi = [];
                }
                
                // Retourne la destination avec le tableau de POI corrigé
                return {
                    ...dest,
                    pointsOfInterest: poi as string[] // Force le type au retour
                };
            });
            // 🚨 FIN DU CORRECTIF TEMPORAIRE

            setAllDestinations(processedData);
            setError(null);
        } catch (err) {
            console.error("Erreur de chargement des destinations:", err);
            
            let errorMessage = "Erreur de connexion inconnue. (Vérifiez le réseau et l'API Laravel)";
            if (err instanceof Error) {
                errorMessage = err.message;
            }
            setError(`Impossible de charger les données du serveur. Erreur : ${errorMessage}`);
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        fetchDestinations();
    }, []);

    const handleSearchFilter = (newSearchTerm: string, newRegion: string) => {
        setSearchTerm(newSearchTerm.toLowerCase().trim());
        setSelectedRegion(newRegion);
    };

    const filteredDestinations = useMemo(() => {
        return allDestinations.filter(destination => {
            const matchesRegion = selectedRegion === 'Toutes les régions' || destination.region === selectedRegion;
            
            if (!searchTerm) return matchesRegion; 

            const lowerCaseSearchTerm = searchTerm.toLowerCase();
            
            // Ce .map() fonctionne maintenant car les données ont été corrigées dans fetchDestinations
            const combinedSearchFields = [
                destination.title.toLowerCase(),
                destination.description.toLowerCase(),
                destination.bestPeriod.toLowerCase(),
                ...destination.pointsOfInterest.map(p => p.toLowerCase())
            ].join(' ');

            const matchesSearchTerm = combinedSearchFields.includes(lowerCaseSearchTerm);

            return matchesRegion && matchesSearchTerm;
        });
    }, [searchTerm, selectedRegion, allDestinations]); 


    // Rendu...
    if (loading) {
        return <div className="loading-message">Chargement des destinations depuis l'API...</div>;
    }

    if (error) {
        return <div className="error-message">Erreur: {error}</div>;
    }


    return (
        <div>
            <div className="destination-header-section">
                <h1>Destinations du Togo</h1>
                <p>Explorez la diversité géographique et culturelle du Togo, de la côte aux montagnes.</p>
            </div>
            
            <SearchDestination
                onSearch={handleSearchFilter}
                availableRegions={AVAILABLE_REGIONS}
                initialSearchTerm={searchTerm}
                initialRegion={selectedRegion}
            />

            <div className="main-destinations-section">
                <p>
                    {searchTerm || selectedRegion !== 'Toutes les régions' 
                        ? "Voici les destinations correspondant à vos critères." 
                        : "Chaque région du Togo offre ses propres merveilles. Découvrez la richesse de notre patrimoine naturel et culturel."}
                </p>
                
                <div className='destinations-grid'>
                    {filteredDestinations.length > 0 ? (
                        filteredDestinations.map((destination) => (
                            <section key={destination.id} className="destination-card">
                                <img 
                                    src={destination.image || "/images/placeholder.jpg"} 
                                    alt={`Vue de ${destination.title}`} 
                                    className="destination-image" 
                                />
                                <div className="card-content">
                                    <div className="city-region-header">
                                        <h3>{destination.title}</h3>
                                        <span className={`region-tag ${destination.region.toLowerCase().replace(/\s/g, '-')}`}>
                                            <FaMapMarkerAlt /> {destination.region}
                                        </span>
                                    </div>
                                    <p className="description">
                                        {destination.description}
                                    </p>
                                    <h4>Points d'intérêt:</h4>
                                    <div className='interest-points-wrapper'>
                                        {/* Cette ligne est maintenant sûre, car les données ont été pré-traitées */}
                                        {destination.pointsOfInterest.map((poi, index) => (
                                            <span key={index} className="interest-tag">
                                                {getIconForFeature(poi)} {poi}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="card-footer">
                                        <p className="best-period"><FaRegCalendarAlt /> Meilleure période : {destination.bestPeriod}</p>
                                        <Link to="/Contact" className="book-button">Réserver</Link>
                                    </div>
                                </div>
                            </section>
                        ))
                    ) : (
                        <div className="no-results-message">
                            <p>Aucune destination trouvée pour les critères de recherche sélectionnés.</p>
                            <p>Essayez de modifier votre terme de recherche ou votre filtre de région.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}