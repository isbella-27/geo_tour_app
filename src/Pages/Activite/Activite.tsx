import { useState } from 'react';
import './Activite.css';
import { Link } from 'react-router';
// Importation des icônes spécifiques de Font Awesome 6 (fa6)
import { FaLocationDot, FaClock, FaCircleCheck, FaBagShopping } from 'react-icons/fa6'; 
// Importation des icônes de Font Awesome 5 (fa)
import { FaSun, FaHeartbeat, FaCameraRetro } from 'react-icons/fa';


// Les noms des catégories sont définis de manière immuable
const categoryNames = [
    "Toutes les activités",
    "Nature et écotourisme",
    "Culture et traditions",
    "Aventure et sport",
    "Détente et bien-être",
];

// Le tableau des activités, défini ici pour garder la structure propre
// (bien qu'il soit recréé à chaque rendu, c'est la structure que vous avez demandée)
const allActivities = [
    {
        id: 1,
        title: "Randonnée au Mont Agou",
        category: "Nature et écotourisme",
        location: "Kpalimé",
        duration: "Journée complète",
        price: "20 000 FCFA",
        difficulty: "Modérée",
        description: "Ascension du point culminant du Togo (986m) avec vue panoramique sur la région des Plateaux. Découverte de la flore tropicale et des villages de montagne.",
        inclusions: ["Guide expérimenté", "Transport", "Déjeuner", "+1 autres inclusions"],
        image: "mont.jpg", // Chemin à vérifier
    },
    {
        id: 2,
        title: "Visite du Marché des Féticheurs",
        category: "Culture et traditions",
        location: "Lomé",
        duration: "2 heures",
        price: "10 000 FCFA",
        difficulty: "Facile",
        description: "Exploration du plus grand marché de médecine traditionnelle d'Afrique de l'Ouest. Rencontre avec les guérisseurs et découverte des pratiques ancestrales.",
        inclusions: ["Guide culturel", "Explications détaillées", "Respect des traditions"],
        image: "/mar.png", // Chemin à vérifier
    },
    {
        id: 3,
        title: "Cascade de Womé",
        category: "Nature et écotourisme",
        location: "Kpalimé",
        duration: "Demi-journée",
        price: "15 000 FCFA",
        difficulty: "Facile",
        description: "Découverte de la magnifique cascade de Womé au cœur de la forêt tropicale. Baignade rafraîchissante et observation de la faune locale.",
        inclusions: ["Transport", "Guide nature", "Temps de baignade"],
        image: "cascade.jpg", // Chemin à vérifier
    },
    {
        id: 4,
        title: "Safari au Parc Oti-Kéran",
        category: "Aventure et sport",
        location: "Dapaong",
        duration: "2 jours",
        price: "85 000 FCFA",
        difficulty: "Modérée",
        description: "Safari dans le parc national Oti-Kéran pour observer éléphants, antilopes, singes et oiseaux dans leur habitat naturel. Nuit en lodge.",
        inclusions: ["Transport 4*4", "Ranger", "Hébergement", "+ 1 autre inclusion"],
        image: "/fazao.jpeg", // Chemin à vérifier
    },
    {
        id: 5,
        title: "Cours de Danse Traditionnelle",
        category: "Culture et traditions",
        location: "Lomé",
        duration: "3 heures",
        price: "12 000 FCFA",
        difficulty: "Facile",
        description: "Initiation aux danses traditionnelles togolaises avec des artistes locaux. Apprentissage des rythmes et mouvements authentiques.",
        inclusions: ["Professeur expert", "Costumes traditionnels", "Musique en direct"],
        image: "danser.png", // Chemin à vérifier
    },
    {
        id: 6,
        title: "Plongée à Aného",
        category: "Aventure et sport",
        location: "Aného",
        duration: "Demi-journée",
        price: "35 000 FCFA",
        difficulty: "Modéré",
        description: "Exploration des fonds marins de la côte togolaise. Découverte de la faune marine et des récifs coralliens préservés.",
        inclusions: ["Équipement complet", "Instructeur certifié", "Transport bateau"],
        image: "/plongee.jpeg", // Chemin à vérifier
    },
    {
        id: 7,
        title: "Massage traditionnel",
        category: "Détente et bien-être",
        location: "Kpalimé",
        duration: "1 heure",
        price: "18 000 FCFA",
        difficulty: "Facile",
        description: "Séance de massage avec des huiles essentielles locales dans un cadre naturel apaisant. Techniques ancestrales de relaxation.",
        inclusions: ["Huiles naturelles", "Thérapeute qualifié", "Cadre paisible"],
        image: "mass.png", // Chemin à vérifier
    },
    {
        id: 8,
        title: "Pêche Traditionnelle",
        category: "Culture et traditions", // Changé de Nature et écotourisme pour plus de variété
        location: "Lac Togo",
        duration: "Demi journée",
        price: "16 000 FCFA",
        difficulty: "Facile",
        description: "Apprentissage des techniques de pêche traditionnelle avec les pêcheurs locaux sur le lac Togo. Expérience authentique et conviviale.",
        inclusions: ["Pirogue traditionnelle", "Matériel de pêche", "Guide pêcheur"],
        image: "peche.png", // Chemin à vérifier
    },
    {
        id: 9,
        title: "Vélo dans la Savane",
        category: "Aventure et sport",
        location: "Kara",
        duration: "Journée complète",
        price: "25 000 FCFA",
        difficulty: "Modéré",
        description: "Circuit à vélo à travers les paysages de savane du nord. Visite de villages traditionnels et rencontre avec les communautés locales.",
        inclusions: ["Vélo tout-terrain", "Casque", "Guide local"],
        image: "velo.png", // Chemin à vérifier
    },
];


export default function Activite() {

    const [activeCategory, setActiveCategory] = useState(categoryNames[0]);

    const handleCategoryClick = (categoryName: string) => {
        setActiveCategory(categoryName);
        console.log(`Filtre d'activité sélectionné : ${categoryName}`);
    };

    // Logique de filtrage : affiche toutes les activités ou seulement celles de la catégorie active
    const filteredActivities = activeCategory === categoryNames[0]
        ? allActivities
        : allActivities.filter(activity => activity.category === activeCategory);

    return (
        <div>
            {/* -------------------- BANDEAU ET FILTRES -------------------- */}
            <div className="activities-header-section">
                <h1>Activités au Togo</h1>
                <p>Vivez des expériences inoubliables entre nature, culture et aventure</p>
            </div>

            <div className="activity-categories-nav">
                <div className="category-buttons-wrapper">
                    {categoryNames.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategoryClick(category)}
                            className={`category-button ${category === activeCategory ? 'active' : ''}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="activities-list-section">
                <h2 className="section-main-title">Activités disponibles</h2>
                <p className="section-main-subtitle">
                    Choisissez parmi notre sélection d'activités authentiques pour enrichir votre séjour
                </p>

                <div className="activities-grid-wrapper">
                    {/* Génération dynamique des cartes à partir du tableau filtré */}
                    {filteredActivities.map((activity) => (
                        <div key={activity.id} className="activity-card">
                            <div className="activity-image-container">
                                <img src={activity.image} alt={activity.title} className="activity-image" />
                            </div>

                            <div className="activity-content">
                                <div className="activity-header">
                                    <h3>{activity.title}</h3>
                                    {/* La classe est générée pour les styles CSS */}
                                    <span className={`difficulty-tag ${activity.difficulty.toLowerCase().replace(' ', '')}`}>{activity.difficulty}</span>
                                </div>

                                {/* UTILISATION DES ICÔNES ICI */}
                                <p className="activity-location"><FaLocationDot className="activity-icon" /> {activity.location}</p>
                                <p className="activity-duration"><FaClock className="activity-icon" /> {activity.duration}</p>

                                <p className="activity-description">
                                    {activity.description}
                                </p>

                                <div className="activity-inclusions">
                                    <h4>Inclus :</h4>
                                    <ul>
                                        {/* Mapping des inclusions */}
                                        {activity.inclusions.map((item, index) => (
                                            <li key={index}><FaCircleCheck className="inclusion-icon" /> {item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="activity-footer">
                                    <span className="activity-price">{activity.price}</span>
                                    <Link to = "/Contact" className="reserve-button">Réserver</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Afficher un message si aucun résultat n'est trouvé après filtrage */}
                {filteredActivities.length === 0 && (
                    <p className="no-activities-message">Aucune activité trouvée dans cette catégorie.</p>
                )}

            </div>
            {/* -------------------- FIN SECTION LISTE DES ACTIVITÉS -------------------- */}

            {/* -------------------- SECTION : CONSEILS PRATIQUES (ICÔNES AJOUTÉES) -------------------- */}
            <div className="advice-section-wrapper">
                <h2 className="advice-main-title">Conseils pratiques</h2>
                <p className="advice-main-subtitle">
                    Préparez-vous au mieux pour profiter pleinement de vos activités
                </p>

                <div className="advice-cards-grid">
                    
                    {/* CARTE 1: Météo */}
                    <div className="advice-card">
                        <div className="advice-icon-container">
                            <FaSun className="advice-icon" /> 
                        </div>
                        <h3>Météo</h3>
                        <p>Vérifiez les conditions météorologiques avant votre activité. Saison sèche recommandée pour la plupart des activités.</p>
                    </div>

                    {/* CARTE 2: Équipement */}
                    <div className="advice-card">
                        <div className="advice-icon-container">
                            <FaBagShopping className="advice-icon" /> {/* ICÔNE CORRIGÉE */}
                        </div>
                        <h3>Équipement</h3>
                        <p>Portez des vêtements confortables et des chaussures adaptées. Crème solaire et chapeau recommandés.</p>
                    </div>

                    {/* CARTE 3: Santé */}
                    <div className="advice-card">
                        <div className="advice-icon-container">
                            <FaHeartbeat className="advice-icon" />
                        </div>
                        <h3>Santé</h3>
                        <p>Consultez votre médecin pour les vaccinations. Hydratez-vous régulièrement pendant les activités.</p>
                    </div>

                    {/* CARTE 4: Photos */}
                    <div className="advice-card">
                        <div className="advice-icon-container">
                            <FaCameraRetro className="advice-icon" />
                        </div>
                        <h3>Photos</h3>
                        <p>Respectez les traditions locales. Demandez l'autorisation avant de photographier les personnes.</p>
                    </div>

                </div>
            </div>
            {/* -------------------- FIN NOUVELLE SECTION : CONSEILS PRATIQUES -------------------- */}
        </div>
    );
}