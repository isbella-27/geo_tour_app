import { Link } from 'react-router-dom';
import './Accueil.css';

// 💡 IMPORTATION DES ICÔNES DE REACT-ICONS
// Nous utilisons Fa (Font Awesome) pour remplacer les classes fas.
import {
  FaUsers, FaMap, FaGlobe, FaRoute, // Pour la section 2 (Statistiques)
  FaMountain, FaHeart, FaMapMarkerAlt, FaLeaf, FaUtensils, FaHome, FaLandmark, FaHiking // Pour les sections 3 et 5
} from 'react-icons/fa';

export default function Accueil() {
  return (
    <div>
      <div className="accueil-container">
        <h1>Découvrez le Togo</h1>
        <p>Un voyage authentique au cœur de l'Afrique de l'Ouest, entre <br /> traditions milénaires et paysages époustouflants </p>

        <div className='button-wrapper'>

          {/* BOUTON 1: Découvrir les destinations */}
          <Link to="/Destination" className='Button'>
            <button className='' type='button'>
              Découvrir les destinations
            </button>
          </Link>

          {/* BOUTON 2: Réservez un séjour */}
          <Link to="/Contact" className='Button'>
            <button className='sejour' type='button'>
              Réservez un séjour
            </button>
          </Link>

        </div>
      </div>

      <div className="home-page-container">

        {/* ==================================================================
                // 1. SECTION D'INTRODUCTION (Bienvenue au Togo)
                // ================================================================== */}
        <div className="home-intro-section">
          <div className="intro-text-content">
            <h1>Bienvenue au Togo</h1>
            <div>
              <p>
                Nichée entre le Ghana et le Bénin, le Togo est une perle de l'Afrique de l'Ouest qui s'étend sur 600 kilomètres du nord au sud. Malgré sa taille modeste, ce pays regorge d'une diversité exceptionnelle qui surprend et enchante chaque visiteur.
              </p>
              <p>
                Des plages dorées de Lomé aux sommets verdoyants du Mont Agou, en passant par les savanes du nord et les forêts tropicales du centre, le Togo offre une mosaïque de paysages à couper le souffle. Chaque région révèle son caractère unique, ses traditions ancestrales et son hospitalité légendaire.
              </p>
              <p>
                Avec plus de 40 ethnies vivantes en harmonie, le Togo est un véritable carrefour culturel où se mêlent langues, danses, musiques et savoir-faire artisanaux. C'est cette richesse humaine qui fait du Togo une destination authentique et inoubliable.
              </p>
            </div>

            <Link to="/Culture" className="discover-culture-button">
              Découvrir la culture
            </Link>
          </div>

          {/* Grille d'Images : Structure décalée */}
          <div className="intro-image-grid-staggered">
            <div className="intro-grid-column left-column">
              <div className="intro-image-wrapper">
                <img src="/Kouta.jpg" alt="Village togolais" className="intro-image" />
              </div>
              <div className="intro-image-wrapper">
                <img src="/cascade.jpg" alt="Forêt du Togo" className="intro-image" />
              </div>
            </div>

            <div className="intro-grid-column right-column">
              <div className="intro-image-wrapper">
                <img src="/aného.jpeg" alt="Plage du Togo" className="intro-image" />
              </div>
              <div className="intro-image-wrapper">
                <img src="/Fazao.jpg" alt="Savane au coucher du soleil" className="intro-image" />
              </div>
            </div>
          </div>
        </div>

        
        <div className="key-stats-section">
          <div className="stat-item">
            <div className="stat-icon">
              {/* Remplacé: <i className="fas fa-users"></i> */}
              <FaUsers />
            </div>
            <div className="stat-value">8M</div>
            <div className="stat-label">Habitants</div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              {/* Remplacé: <i className="fas fa-map"></i> */}
              <FaMap />
            </div>
            <div className="stat-value">56 785</div>
            <div className="stat-label">km² de superficie</div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              {/* Remplacé: <i className="fas fa-globe"></i> */}
              <FaGlobe />
            </div>
            <div className="stat-value">40 ans et plus</div>
            <div className="stat-label">Ethnies</div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              {/* Remplacé: <i className="fas fa-route"></i> */}
              <FaRoute />
            </div>
            <div className="stat-value">600 km</div>
            <div className="stat-label">Du nord au sud</div>
          </div>
        </div>

        {/* ==================================================================
                // 3. SECTION : POURQUOI VISITER LE TOGO (Icônes remplacées)
                // ================================================================== */}
        <div className="why-visit-section">
          <h2>Pourquoi Visiter le Togo ?</h2>
          <p className="why-visit-subtitle">Six raisons qui font du Togo une destination incontournable en Afrique de l'Ouest</p>

          <div className="reasons-grid">
            {/* CARTE 1: Diversité des Paysages */}
            <div className="reason-card">
              <div className="card-icon">
                {/* Remplacé: <i className="fas fa-mountain"></i> */}
                <FaMountain />
              </div>
              <h3>Diversité des Paysages</h3>
              <p>
                Du littoral atlantique aux montagnes verdoyantes, en passant par la savane du nord, le Togo offre une incroyable variété de paysages sur un territoire compact.
              </p>
            </div>

            {/* CARTE 2: Richesse Culturelle */}
            <div className="reason-card">
              <div className="card-icon">
                {/* Remplacé: <i className="fas fa-home"></i> (Maintenant FaLandmark pour être distinct) */}
                <FaLandmark />
              </div>
              <h3>Richesse Culturelle</h3>
              <p>
                Plus de 40 ethnies cohabitent harmonieusement, chacune avec ses traditions, danses, musiques et savoir-faire artisanaux uniques qui font la richesse du pays.
              </p>
            </div>

            {/* CARTE 3: Accueil Chaleureux */}
            <div className="reason-card">
              <div className="card-icon">
                {/* Remplacé: <i className="fas fa-heart"></i> */}
                <FaHeart />
              </div>
              <h3>Accueil Chaleureux</h3>
              <p>
                Les Togolais sont réputés pour leur hospitalité légendaire. Vous serez accueillis comme des membres de la famille et découvrirez la vraie convivialité africaine.
              </p>
            </div>

            {/* CARTE 4: Destination accessible */}
            <div className="reason-card">
              <div className="card-icon">
                {/* Remplacé: <i className="fas fa-map-marker-alt"></i> */}
                <FaMapMarkerAlt />
              </div>
              <h3>Destination accessible</h3>
              <p>
                Le Togo offre un excellent rapport qualité-prix avec des hébergements pour tous les budgets et des expériences authentiques à des tarifs abordables.
              </p>
            </div>

            {/* CARTE 5: Écotourisme */}
            <div className="reason-card">
              <div className="card-icon">
                {/* Remplacé: <i className="fas fa-leaf"></i> */}
                <FaLeaf />
              </div>
              <h3>Écotourisme</h3>
              <p>
                Parcs nationaux préservés, cascades majestueuses, forêts tropicales et faune sauvage vous attendent pour des aventures nature inoubliables.
              </p>
            </div>

            {/* CARTE 6: Gastronomie Unique */}
            <div className="reason-card">
              <div className="card-icon">
                {/* Remplacé: <i className="fas fa-utensils"></i> */}
                <FaUtensils />
              </div>
              <h3>Gastronomie Unique</h3>
              <p>
                Découvrez une cuisine savoureuse et variée, mélange de traditions ancestrales et d'influences diverses, avec des ingrédients frais et locaux.
              </p>
            </div>
          </div>
        </div>

        
        <div className="popular-destinations-section">
          <h2>Destinations populaires</h2>
          <p className="destination-subtitle">Explorez les joyaux du Togo, des plages dorées aux montagnes verdoyantes</p>

          <div className="destination-cards-grid">

            {/* CARTE 1: Lomé */}
            <div className="destination-card">
              <img src="/marche.jpg" alt="Marché de Lomé" className="destination-image" />
              <div className="destination-content">
                <h3>Lomé</h3>
                <p>
                  Capitale dynamique avec ses marchés colorés et ses plages magnifiques
                </p>
                <Link to="/Destination" className="destination-link">
                  Découvrir →
                </Link>
              </div>
            </div>

            {/* CARTE 2: Kpalimé */}
            <div className="destination-card">
              <img src="/cascade.jpg" alt="Cascade près de Kpalimé" className="destination-image" />
              <div className="destination-content">
                <h3>Kpalimé</h3>
                <p>
                  Région montagneuse aux paysages verdoyants et cascades spectaculaires
                </p>
                <Link to="/Destination" className="destination-link">
                  Découvrir →
                </Link>
              </div>
            </div>

            {/* CARTE 3: Kara */}
            <div className="destination-card">
              <img src="/artisanat.jpg" alt="Village de Tamberma à Kara" className="destination-image" />
              <div className="destination-content">
                <h3>Kara</h3>
                <p>
                  Terre des traditions avec ses villages authentiques et artisanat local
                </p>
                <Link to="Destination" className="destination-link">
                  Découvrir →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================================
                // 5. SECTION : EXPÉRIENCES UNIQUES (Cartes cliquables AVEC ICÔNES REACT)
                // ================================================================== */}
        <div className="unique-experiences-section">
          <h2>Expériences uniques</h2>
          <p className="experiences-subtitle">Plongez dans la richesse culturelle et naturelle du Togo</p>

          <div className="experiences-grid">

            {/* CARTE 1: Hébergements */}
            <Link to="/Hebergement" className="experience-card">
              <div className="card-icon">
                {/* Remplacé: <i className="fas fa-home"></i> */}
                <FaHome />
              </div>
              <h3>Hébergements</h3>
              <p>
                Du lodge écologique au resort de luxe
              </p>
            </Link>

            {/* CARTE 2: Culture */}
            <Link to="/Culture" className="experience-card">
              <div className="card-icon">
                {/* Remplacé: <i className="fas fa-landmark"></i> */}
                <FaLandmark />
              </div>
              <h3>Culture</h3>
              <p>
                Traditions ancestrales et patrimoine vivant
              </p>
            </Link>

            {/* CARTE 3: Cuisine */}
            <Link to="/Cuisine" className="experience-card">
              <div className="card-icon">
                {/* Remplacé: <i className="fas fa-utensils"></i> */}
                <FaUtensils />
              </div>
              <h3>Cuisine</h3>
              <p>
                Saveurs authentiques et spécialités locales
              </p>
            </Link>

            {/* CARTE 4: Activités */}
            <Link to="/Activite" className="experience-card">
              <div className="card-icon">
                {/* Remplacé: <i className="fas fa-hiking"></i> */}
                <FaHiking />
              </div>
              <h3>Activités</h3>
              <p>
                Aventures et découvertes inoubliables
              </p>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}