import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import SearchAccommodation from '../SearchAccommodation/SearchAccommodation';
import './Hebergement.css';
import { FaMapMarkerAlt, FaStar, FaWifi, FaSwimmingPool, FaUtensils, FaTachometerAlt, FaTree, FaBusAlt, FaBed, FaParking, FaConciergeBell, FaSpa, FaWater, FaRegBuilding, FaBriefcase, FaGlassMartini, FaMountain } from 'react-icons/fa';
import { MdOutlineFastfood, MdTerrain, MdRestaurant, MdOutlineSpa, MdBeachAccess, MdOutlineLocalAirport, MdOutlineFamilyRestroom } from 'react-icons/md';

// --- FONCTION UTILITAIRE ---
const slugify = (text) => {
    return text
        .toLowerCase()
        .trim()
        .replace(/ /g, '-')
        .replace(/[éèêë]/g, 'e')
        .replace(/[^a-z0-9-]/g, '');
};
// -------------------------

// --- DONNÉES D'HÉBERGEMENT (Avec un focus sur les icônes de caractéristiques) ---

// Fonction utilitaire pour choisir l'icône basée sur le nom de la caractéristique
const getFeatureIcon = (feature) => {
    switch (feature) {
        case 'WiFi gratuit':
            return <FaWifi />;
        case 'Piscine':
            return <FaSwimmingPool />;
        case 'Restaurant':
        case 'Restaurant bio':
            return <FaUtensils />;
        case 'Vue sur cascade':
            return <FaWater />;
        case 'Randonnées guidées':
            return <FaMountain />; // <-- FaMountain est maintenant importée
        case 'Petit-déjeuner inclus':
            return <MdOutlineFastfood />;
        case 'Terrasse commune':
            return <FaTree />;
        case 'Accès plage privée':
            return <MdBeachAccess />;
        case 'Spa':
            return <FaSpa />;
        case 'Sports nautiques':
            return <FaWater />;
        case 'Centre d\'affaires':
            return <FaBriefcase />;
        case 'Parking':
            return <FaParking />;
        case 'Safari':
        case 'faune d\'observation':
            return <MdTerrain />;
        case '+ 1 autres':
        case '+ 2 autres':
            return <FaConciergeBell />;
        default:
            return <FaBed />; // Icône par défaut
    }
};


const allAccommodations = [
    {
        id: 101,
        title: "Hôtel 2 Février",
        location: "Lomé",
        rating: "4.5",
        price: "45 000 FCFA/nuit",
        description: "Hôtel moderne au cœur de Lomé, proche des attractions principales et de la plage.",
        features: ["WiFi gratuit", "Piscine", "Restaurant", "Centre de conférence"],
        image: "/H2.jpeg",
        type: 'Hôtels' 
    },
    {
        id: 102,
        title: "Lodge de la Cascade",
        location: "Kpalimé",
        rating: "4.8",
        price: "35 000 FCFA/nuit",
        description: "Lodge écologique offrant une expérience immersive dans la nature de Kpalimé.",
        features: ["Vue sur cascade", "Randonnées guidées", "Restaurant bio", "Petit-déjeuner inclus"],
        image: "/lodge.jpeg",
        type: 'Lodges Écologiques' 
    },
    {
        id: 103,
        title: "Auberge du Voyageur",
        location: "Kara",
        rating: "4.2",
        price: "15 000 FCFA/nuit",
        description: "Auberge chaleureuse pour découvrir la culture Kabyè et les traditions locales.",
        features: ["Petit-déjeuner inclus", "WiFi gratuit", "Terrasse commune", "Parking"],
        image: "/auberge.jpeg",
        type: 'Auberges' 
    },
    {
        id: 104,
        title: "Resort de luxe face à l'océan", 
        location: "Aného",
        rating: "4.7",
        price: "75 000 FCFA/nuit",
        description: "Resort de luxe face à l'océan, parfait pour une escapade romantique.",
        features: ["Accès plage privée", "Spa", "Sports nautiques", "Bar"],
        image: "/ane.jpeg", 
        type: 'Stations balnéaires' 
    },
    {
        id: 105,
        title: "Hôtel des Plateaux", 
        location: "Sokodé",
        rating: "4.3",
        price: "30 000 FCFA/nuit",
        description: "Hôtel confortable au centre de Sokodé, idéal pour les voyages d'affaires.",
        features: ["Centre d'affaires", "Restaurant", "Parking", "WiFi gratuit"],
        image: "/hotel.jpeg", 
        type: 'Hôtels'
    },
    {
        id: 106,
        title: "Pavillon Savane", 
        location: "Dapaong",
        rating: "4.6",
        price: "40 000 FCFA/nuit",
        description: "Lodge authentique pour explorer la savane du nord et observer la faune.",
        features: ["Safari", "faune d'observation", "Terrasse commune", "Randonnées guidées"],
        image: "/lodge1.jpeg", 
        type: 'Lodges Écologiques' 
    },
];
// ------------------------------------------------------------------

export default function Hebergement() {
    const [activeFilter, setActiveFilter] = useState('Tous les hébergements');

    const filteredAccommodations = allAccommodations.filter(accommodation => {
        if (activeFilter === 'Tous les hébergements') {
            return true;
        }
        return accommodation.type === activeFilter;
    });

    return (
        <div>
            {/* SECTION BANDEAU SUPÉRIEUR */}
            <div className="hebergement-header-section">
                <h1>Hébergements du Togo</h1>
                <p>Du lodge écologique au resort de luxe, trouvez l'hébergement parfait pour votre séjour</p>
            </div>
            
            {/* PASSAGE DES PROPS DE FILTRAGE */}
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
                                    <img src={accommodation.image} alt={accommodation.title} className="card-image" />
                                </div>
                                <div className="card-content">
                                    <div className="card-header">
                                        <h3 className="card-name">{accommodation.title}</h3>
                                        {/* Remplacement de '⭐' par FaStar */}
                                        <span className="card-rating"><FaStar /> {accommodation.rating}</span>
                                    </div>
                                    {/* Remplacement de '📍' par FaMapMarkerAlt */}
                                    <p className="card-location"><FaMapMarkerAlt /> {accommodation.location}</p>
                                    <p className="card-description">
                                        {accommodation.description}
                                    </p>
                                    <div className="card-features">
                                        {accommodation.features.slice(0, 3).map((feature, index) => (
                                            <span key={index} className="feature-tag">
                                                {getFeatureIcon(feature)} {feature}
                                            </span>
                                        ))}
                                        {accommodation.features.length > 3 && 
                                            <span className="feature-tag">
                                                {getFeatureIcon('+ 1 autres')} + {(accommodation.features.length - 3)} autres
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
                        <p className="no-results-message">Aucun hébergement ne correspond à ce filtre.</p>
                    )}
                </div> {/* Fin .accommodation-grid */}
            </div> {/* Fin .accommodation-list-section */}
        </div>
    );
}