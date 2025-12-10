import './Cuisine.css';
// Importation des icônes nécessaires
import { FaTag, FaSeedling, FaUtensils, FaShoppingCart, FaCalendarAlt, FaClock, FaMoneyBillAlt, FaUsers } from 'react-icons/fa';
import { IoLeaf, IoRestaurant } from 'react-icons/io5';


export default function Cuisine() {
  return (
    <div>
      <div className="cuisine-header-section">
        <h1>Cuisine Togolaise</h1>
        <p>Savourez les délices authentiques et les saveurs uniques de la gastronomie togolaise</p>
      </div>

      <div className="main-cuisines-section">
        {/* TITRES UTILISANT LES CLASSES GÉNÉRIQUES */}
        <h2 className="section-main-title">Plats Traditionnels</h2>
        <p className="section-main-subtitle">Découvrez les saveurs authentiques qui font la richesse de la cuisine togolaise</p>

        {/* GRILLE EN 2 COLONNES (2x3) */}
        <div className='cuisines-grid'>

          {/* CARTE 1 : Fufu */}
          <section className="cuisine-card">
            <img src="fazao.jpeg" alt="Plat de Fufu avec sauce" className="cuisine-image" />
            <div className="card-content">
              <div className="city-region-header">
                <h3>Fufu</h3>
                <span className="region-tag maritime"><FaTag /> National</span>
              </div>
              <p className="description">
                Plat de base togolais préparé avec de l'igname, du manioc ou de la banane plantain pilé. Accompagné de sauces riches et savoureuses, c'est l'âme de la cuisine togolaise.
              </p>
              <h4>Ingrédients principaux :</h4>
              <div className='cuisine-tags-wrapper'>
                <span className="cuisine-tag"><IoLeaf /> Igname</span>
                <span className="cuisine-tag"><IoLeaf /> Manioc</span>
                <span className="cuisine-tag"><IoLeaf /> Banane plantain</span>
              </div>
            </div>
          </section>

          {/* CARTE 2 : Akoumé */}
          <section className="cuisine-card">
            <img src="Akoume.webp" alt="Plat d'Akoumé" className="cuisine-image" />
            <div className="card-content">
              <div className="city-region-header">
                <h3>Akoumé</h3>
                <span className="region-tag plateaux"><FaTag /> Sud</span>
              </div>
              <p className="description">
                Pâte de maïs fermenté, spécialité du sud du Togo. Servi avec des sauces épicées et des légumes, c'est un plat nutritif et délicieux apprécié de tous.
              </p>
              <h4>Ingrédients principaux :</h4>
              <div className='cuisine-tags-wrapper'>
                <span className="cuisine-tag"><IoLeaf /> Maïs fermenté</span>
                <span className="cuisine-tag"><IoLeaf /> Légumes verts</span>
                <span className="cuisine-tag"><IoLeaf /> Épices locales</span>
              </div>
            </div>
          </section>

          {/* CARTE 3 : Koklo mémé */}
          <section className="cuisine-card">
            <img src="Koklo_meme.webp" alt="Plat de Poulet grillé togolais" className="cuisine-image" />
            <div className="card-content">
              <div className="city-region-header">
                <h3>Koklo mémé</h3>
                <span className="region-tag maritime"><FaTag /> National</span>
              </div>
              <p className="description">
                Poulet grillé mariné dans un mélange d'épices locales et de piment. Ce plat emblématique révèle toute la richesse des saveurs togolaises.
              </p>
              <h4>Ingrédients principaux :</h4>
              <div className='cuisine-tags-wrapper'>
                <span className="cuisine-tag"><IoRestaurant /> Poulet fermier</span>
                <span className="cuisine-tag"><IoLeaf /> Piment rouge</span>
                <span className="cuisine-tag"><IoLeaf /> Épices traditionnelles</span>
              </div>
            </div>
          </section>

          {/* CARTE 4 : Abobo (Haricot) */}
          <section className="cuisine-card">
            <img src="Abobo.webp" alt="Plat de Haricots rouges" className="cuisine-image" />
            <div className="card-content">
              <div className="city-region-header">
                <h3>Abobo (Haricot)</h3>
                <span className="region-tag maritime"><FaTag /> National</span>
              </div>
              <p className="description">
                Un plat très populaire à base de haricots rouges ou de niébé, souvent cuit à la vapeur. Il est généralement servi avec de l'huile rouge et du gari ou de l'attiéké.
              </p>
              <h4>Ingrédients principaux :</h4>
              <div className='cuisine-tags-wrapper'>
                <span className="cuisine-tag"><IoLeaf /> Haricots (Niébé)</span>
                <span className="cuisine-tag"><IoLeaf /> Huile rouge</span>
                <span className="cuisine-tag"><IoLeaf /> Attiéké</span>
              </div>
            </div>
          </section>

          {/* CARTE 5 : Gboma Dési */}
          <section className="cuisine-card">
            <img src="Gboma_Desi.webp" alt="Plat de sauce Gboma" className="cuisine-image" />
            <div className="card-content">
              <div className="city-region-header">
                <h3>Gboma Dési</h3>
                <span className="region-tag plateaux"><FaTag /> Sud</span>
              </div>
              <p className="description">
                Sauce très populaire à base d'épinards locaux (gboma), de viande ou de poisson, et d'huile de palme. Elle est souvent consommée avec du Fufu ou de l'Akoumé.
              </p>
              <h4>Ingrédients principaux :</h4>
              <div className='cuisine-tags-wrapper'>
                <span className="cuisine-tag"><IoLeaf /> Épinards</span>
                <span className="cuisine-tag"><IoRestaurant /> Viande / Poisson</span>
                <span className="cuisine-tag"><IoLeaf /> Huile de palme</span>
              </div>
            </div>
          </section>

          {/* CARTE 6 : Pâtes noires */}
          <section className="cuisine-card">
            <img src="fazao.jpeg" alt="Plat de Pâte de maïs noir" className="cuisine-image" />
            <div className="card-content">
              <div className="city-region-header">
                <h3>Pâtes noires</h3>
                <span className="region-tag savanes"><FaTag /> Nord</span>
              </div>
              <p className="description">
                Spécialité du Nord (Kabyè), cette pâte est faite à partir de farine de maïs ou de sorgho. Sa couleur foncée provient de la méthode de cuisson. Elle est servie avec des sauces riches.
              </p>
              <h4>Ingrédients principaux :</h4>
              <div className='cuisine-tags-wrapper'>
                <span className="cuisine-tag"><IoLeaf /> Farine de Maïs</span>
                <span className="cuisine-tag"><IoLeaf /> Sorgho</span>
                <span className="cuisine-tag"><IoLeaf /> Sauce Gombo</span>
              </div>
            </div>
          </section>


        </div> {/* Fin .cuisines-grid */}
      </div> {/* Fin .main-cuisine-section */}
      
      <div className="boisson-section-container">
        <h2 className="section-main-title">Boissons Traditionnelles</h2>
        <p className="section-main-subtitle">
          Rafraîchissez-vous avec les boissons ancestrales du Togo
        </p>

        {/* GRILLE DES BOISSONS (3x1) */}
        <div className="boisson-grid">

          {/* CARTE 1 : Tchoukoutou */}
          <section className="boisson-card">
            <img src="/tchoukoutou.jpg" alt="Tchoukoutou" className="boisson-image" />
            <div className="card-content">
              <h3>Tchoukoutou</h3>
              <p className="boisson-tag"><FaTag /> Bière traditionnelle</p>
              <p className="description">
                Bière de mil brassée artisanalement, boisson ancestrale du nord du Togo.
              </p>
            </div>
          </section>

          {/* CARTE 2 : Vin de palme */}
          <section className="boisson-card">
            <img src="/vin-palme.jpg" alt="Vin de palme" className="boisson-image" />
            <div className="card-content">
              <h3>Vin de palme</h3>
              <p className="boisson-tag"><FaTag /> Boisson fermentée</p>
              <p className="description">
                Sève de palmier fermentée naturellement, rafraîchissante et nutritive.
              </p>
            </div>
          </section>

          {/* CARTE 3 : Bissap */}
          <section className="boisson-card">
            <img src="fazao.jpeg" alt="Bissap" className="boisson-image" />
            <div className="card-content">
              <h3>Bissap</h3>
              <p className="boisson-tag"><FaTag /> Infusion</p>
              <p className="description">
                Boisson à base de fleurs d'hibiscus, rafraîchissante et riche en vitamines.
              </p>
            </div>
          </section>

        </div>
      </div>

      <div className="ingredients-section-container">
        <h2 className="section-main-title">Ingrédients Locaux</h2>
        <p className="section-main-subtitle">
          Les trésors de la terre togolaise qui donnent vie à notre cuisine
        </p>

        {/* GRILLE DES INGRÉDIENTS (3x2) */}
        <div className="ingredients-grid">

          {/* CARTE 1 : Igname */}
          <section className="ingredient-card">
            <div className="card-header">
              <h3><FaSeedling /> Igname</h3>
              <p className="season-tag"><FaCalendarAlt /> Toute l'année</p>
            </div>
            <p className="description">
              Tubercule de base de l'alimentation togolaise, riche en amidon.
            </p>
          </section>

          {/* CARTE 2 : Manioc */}
          <section className="ingredient-card">
            <div className="card-header">
              <h3><FaSeedling /> Manioc</h3>
              <p className="season-tag"><FaCalendarAlt /> Toute l'année</p>
            </div>
            <p className="description">
              Racine nutritive transformée en farine ou consommée fraîche.
            </p>
          </section>

          {/* CARTE 3 : Plantain */}
          <section className="ingredient-card">
            <div className="card-header">
              <h3><FaSeedling /> Plantain</h3>
              <p className="season-tag"><FaCalendarAlt /> Toute l'année</p>
            </div>
            <p className="description">
              Banane à cuire, douce et nourrissante, utilisée dans de nombreux plats.
            </p>
          </section>

          {/* CARTE 4 : Gboma */}
          <section className="ingredient-card">
            <div className="card-header">
              <h3><FaSeedling /> Gboma</h3>
              <p className="season-tag saison-pluies"><FaCalendarAlt /> Saison des pluies</p>
            </div>
            <p className="description">
              Épinards locaux aux feuilles tendres et savoureuses.
            </p>
          </section>

          {/* CARTE 5 : Piment rouge */}
          <section className="ingredient-card">
            <div className="card-header">
              <h3><FaSeedling /> Piment rouge</h3>
              <p className="season-tag saison-seche"><FaCalendarAlt /> Saison sèche</p>
            </div>
            <p className="description">
              Épice incontournable qui donne du caractère aux plats togolais.
            </p>
          </section>

          {/* CARTE 6 : Poisson fumé */}
          <section className="ingredient-card">
            <div className="card-header">
              <h3><IoRestaurant /> Poisson fumé</h3>
              <p className="season-tag"><FaCalendarAlt /> Toute l'année</p>
            </div>
            <p className="description">
              Méthode traditionnelle de conservation qui enrichit les saveurs.
            </p>
          </section>

        </div>
      </div>
      
      {/* SECTION EXPÉRIENCES CULINAIRES AVEC NOUVEAUX CLASSNAMES */}
      <div className="culinary-experiences-section">
        <h2 className="section-main-title">Expériences culinaires</h2>
        <p className="section-main-subtitle">
          Participez à des expériences authentiques pour découvrir nos secrets culinaires
        </p>

        <div className="experience-cards-grid">

          {/* CARTE 1 : Cours de Cuisine Traditionnelle */}
          <section className="culinary-experience-card">
            <h3><FaUtensils /> Cours de Cuisine Traditionnelle</h3>
            <p className="card-description-text">
              Apprenez à préparer les plats emblématiques avec des cuisinières locales.
            </p>

            <div className="details-wrapper">
              <p><FaClock /> Durée : 3 heures</p>
              <p><FaMoneyBillAlt /> Prix : 25 000 FCFA</p>
            </div>

            <h4>Inclus :</h4>
            <ul className="inclus-list">
              <li><IoLeaf /> Ingrédients</li>
              <li><FaUtensils /> Recettes</li>
              <li><IoRestaurant /> Dégustation</li>
            </ul>
            {/* Lien de réservation pour le cours de cuisine */}
            <a href="/Contact" className="reserve-button">Réserver</a>
          </section>

          {/* CARTE 2 : Visite des marchés */}
          <section className="culinary-experience-card">
            <h3><FaShoppingCart /> Visite des marchés</h3>
            <p className="card-description-text">
              Découvrez les ingrédients locaux et les techniques de sélection.
            </p>

            <div className="details-wrapper">
              <p><FaClock /> Durée : 2 heures</p>
              <p><FaMoneyBillAlt /> Prix : 15 000 FCFA</p>
            </div>

            <h4>Inclus :</h4>
            <ul className="inclus-list">
              <li><FaUsers /> Guide local</li>
              <li><IoRestaurant /> Dégustation</li>
              <li><FaShoppingCart /> Achats</li>
            </ul>
            {/* Lien de réservation pour la visite des marchés */}
            <a href="/Contact" className="reserve-button">Réserver</a>
          </section>

          {/* CARTE 3 : Dîner en famille */}
          <section className="culinary-experience-card">
            <h3><FaUsers /> Dîner en famille</h3>
            <p className="card-description-text">
              Partagez un repas authentique dans une famille togolaise.
            </p>

            <div className="details-wrapper">
              <p><FaClock /> Durée : 2 heures</p>
              <p><FaMoneyBillAlt /> Prix : 20 000 FCFA</p>
            </div>

            <h4>Inclus :</h4>
            <ul className="inclus-list">
              <li><IoRestaurant /> Repas complet</li>
              <li><FaUsers /> Échanges culturels</li>
              <li><FaUtensils /> Recettes</li>
            </ul>
            {/* Lien de réservation pour le dîner en famille */}
            <a href="/Contact" className="reserve-button">Réserver</a>
          </section>
        </div>
      </div>
    </div>
  );
}