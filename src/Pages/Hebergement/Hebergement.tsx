import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchAccommodation from '../SearchAccommodation/SearchAccommodation';
import './Hebergement.css';

// Import des types et de l'API
import type { Hebergement } from '../../data/models/hebergement';
import { hebergementApi } from '../../api/hebergements/crud_hebergement';
import { FaBed, FaBriefcase, FaConciergeBell, FaMapMarkerAlt, FaMountain, FaParking, FaSpa, FaStar, FaSwimmingPool, FaTree, FaUtensils, FaWater, FaWifi } from 'react-icons/fa';
import { MdBeachAccess, MdOutlineFastfood, MdTerrain } from 'react-icons/md';


// --- FONCTION UTILITAIRE : GESTION DU PARSING JSON (Correction Erreur slice) ---
const getFeaturesArray = (features: any): string[] => {
    // 1. Si c'est déjà un Array, le renvoyer
    if (Array.isArray(features)) {
        // TypeScript est content
        return features; 
    }
    // 2. Si c'est une chaîne de caractères (JSON sérialisé), on tente de le parser
    if (typeof features === 'string') {
        try {
            const parsed = JSON.parse(features);
            // On vérifie que le résultat du parsing est bien un tableau
            return Array.isArray(parsed) ? parsed : [];
        } catch (e) {
            // Log l'erreur de parsing et renvoie un tableau vide
            console.error("Erreur de désérialisation JSON des features:", e);
            return [];
        }
    }
    // 3. Sinon (null, undefined, ou autre), renvoyer vide
    return []; 
};

// --- FONCTION UTILITAIRE : Gestion des Icônes (Correction TS7006) ---
const getFeatureIcon = (feature: string) => { 
    switch (feature) {
        case 'WiFi gratuit':
        case 'WiFi':
            return <FaWifi />;
        case 'Piscine':
            return <FaSwimmingPool />;
        case 'Restaurant':
        case 'Restaurant bio':
            return <FaUtensils />;
        case 'Vue sur cascade':
        case 'Sports nautiques':
            return <FaWater />;
        case 'Randonnées guidées':
            return <FaMountain />;
        case 'Petit-déjeuner inclus':
            return <MdOutlineFastfood />;
        case 'Terrasse commune':
            return <FaTree />;
        case 'Accès plage privée':
            return <MdBeachAccess />;
        case 'Spa':
            return <FaSpa />;
        case 'Centre d\'affaires':
            return <FaBriefcase />;
        case 'Parking':
            return <FaParking />;
        case 'Safari':
        case 'Faune d\'observation':
        case 'faune d\'observation':
            return <MdTerrain />;
        case '+ 1 autres':
        case '+ 2 autres':
            return <FaConciergeBell />;
        default:
            return <FaBed />;
    }
};

// --- Composant Principal ---
export default function Hebergement() {

    const [allAccommodations, setAllAccommodations] = useState<Hebergement[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeFilter, setActiveFilter] = useState('Tous les hébergements');

    // Fonction de chargement des données (GET ALL)
    const fetchHebergements = async () => {
        try {
            setLoading(true);
            const data = await hebergementApi.getAll();
            setAllAccommodations(data);
            setError(null);
        } catch (err) {
            console.error("Erreur de chargement des hébergements:", err);
            
            // 🚀 Correction TS18046: Gère l'erreur de type 'unknown'
            let errorMessage = "Erreur de connexion inconnue. (Vérifiez le réseau et l'API Laravel)";

            if (err instanceof Error) {
                errorMessage = err.message;
            } else if (typeof err === 'string') {
                errorMessage = err;
            } else if (err && typeof err === 'object' && 'message' in err && typeof err.message === 'string') {
                 errorMessage = err.message;
            }
            
            setError(`Impossible de charger les données du serveur. Erreur : ${errorMessage}`);
        } finally {
            setLoading(false);
        }
    };

    // Appel de l'API au montage
    useEffect(() => {
        fetchHebergements();
    }, []);

    // Logique de Filtrage
    const filteredAccommodations = allAccommodations.filter(accommodation => {
        if (activeFilter === 'Tous les hébergements') {
            return true;
        }
        return accommodation.type === activeFilter;
    });

    // Rendu des états de chargement/erreur
    if (loading) {
        return <div className="loading-message">Chargement des hébergements depuis l'API...</div>;
    }

    if (error) {
        return <div className="error-message">Erreur: {error}</div>;
    }

    return (
        <div>
            {/* SECTION BANDEAU SUPÉRIEUR */}
            <div className="hebergement-header-section">
                <h1>Hébergements du Togo</h1>
                <p>Du lodge écologique au resort de luxe, trouvez l'hébergement parfait pour votre séjour</p>
            </div>

            <SearchAccommodation
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
            />

            {/* SECTION D'AFFICHAGE DES CARTES D'HÉBERGEMENT (Dynamique) */}
            <div className="accommodation-list-section">
                <h2 className="section-title">
                    {activeFilter === 'Tous les hébergements' ? 'Découvrez nos meilleurs hébergements' : `Résultats pour : ${activeFilter}`}
                </h2>

                <div className='accommodation-grid'>
                    {filteredAccommodations.length > 0 ? (
                        filteredAccommodations.map((accommodation) => (
                            <section key={accommodation.id} className="accommodation-card">
                                <div className="card-image-wrapper">
                                    {/* Correction TS2322 : Utilise ?? '' pour gérer null */}
                                    {accommodation.image ? (
                                        <img 
                                            src={accommodation.image ?? ''} 
                                            alt={accommodation.title} 
                                            className="card-image" 
                                        />
                                    ) : (
                                        // Placeholder pour l'image manquante
                                        <div className="card-image-placeholder">Image Non Fournie</div>
                                    )}
                                </div>
                                <div className="card-content">
                                    <div className="card-header">
                                        <h3 className="card-name">{accommodation.title}</h3>
                                        <span className="card-rating"><FaStar /> {accommodation.rating}</span>
                                    </div>
                                    <p className="card-location"><FaMapMarkerAlt /> {accommodation.location}</p>
                                    <p className="card-description">
                                        {accommodation.description}
                                    </p>
                                    <div className="card-features">
                                        {/* 🎯 Utilise getFeaturesArray pour garantir que c'est un Array (Correction slice) */}
                                        {getFeaturesArray(accommodation.features).slice(0, 3).map((feature, index) => (
                                            typeof feature === 'string' && feature.trim() !== '' && (
                                                <span key={index} className="feature-tag">
                                                    {getFeatureIcon(feature)} {feature}
                                                </span>
                                            )
                                        ))}
                                        {/* Utilisation de la version sécurisée pour vérifier la longueur */}
                                        {getFeaturesArray(accommodation.features).length > 3 &&
                                            <span className="feature-tag">
                                                {getFeatureIcon('+ 1 autres')} + {(getFeaturesArray(accommodation.features).length - 3)} autres
                                            </span>
                                        }
                                    </div>
                                    <div className="card-footer">
                                        <p className="card-price">{accommodation.price}</p>

                                        <Link
                                            to={`/Contact`}
                                            className="book-button"
                                        >
                                            Réserver
                                        </Link>
                                    </div>
                                </div>
                            </section>
                        ))
                    ) : (
                        <p className="no-results-message">
                            Aucun hébergement ne correspond à ce filtre ou la liste est vide.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}