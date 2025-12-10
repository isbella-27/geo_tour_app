import React from 'react';
import { Link } from 'react-router-dom';
// Importation des icônes de React Icons
import { FaMapMarkerAlt, FaRegCalendarAlt, FaStore, FaPagelines, FaLandmark, FaMountain, FaCoffee, FaSafari, FaTree, FaWater } from 'react-icons/fa';
import { MdOutlineArchitecture, MdMuseum, MdPool, MdLandscape } from 'react-icons/md';

import './Destination.css';

export default function Destination() {
  return (
    <div>
      <div className="destination-header-section">
        <h1>Destinations du Togo</h1>
        <p>Explorez la diversité géographique et culturelle du Togo, de la côte aux montagnes.</p>
      </div>

      <div className="main-destinations-section">
        <h1>Nos Destinations Principales</h1>
        <p>Chaque région du Togo offre ses propres merveilles. Découvrez la richesse de notre patrimoine naturel et culturel.</p>
        
        <div className='destinations-grid'>
          
          {/* CARTE DE LOMÉ */}
          <section className="destination-card">
            <img src="lome.jpeg" alt="Vue de Lomé" className="destination-image" />
            <div className="card-content">
              <div className="city-region-header">
                <h3>Lomé</h3>
                <span className="region-tag maritime"><FaMapMarkerAlt /> Maritime</span>
              </div>
              <p className="description">
                Capitale vibrante du Togo, Lomé séduit par ses marchés colorés, son architecture coloniale et ses magnifiques plages de sable fin. Le Grand Marché et le marché des féticheurs offrent une immersion authentique dans la culture togolaise.
              </p>
              <h4>Points d'intérêt:</h4>
              <div className='interest-points-wrapper'>
                <span className="interest-tag"><MdPool /> Plage de Lomé</span>
                <span className="interest-tag"><FaStore /> Grand Marché</span>
                <span className="interest-tag"><FaPagelines /> Marché des féticheurs</span>
                <span className="interest-tag"><FaLandmark /> Cathédrale du Sacré-Cœur</span>
              </div>
              <div className="card-footer">
                <p className="best-period"><FaRegCalendarAlt /> Meilleure période : Novembre à Mars</p>
                <Link to="/Contact" className="book-button">Réserver</Link>
              </div>
            </div>
          </section>

          {/* CARTE DES PLATEAUX (Kpalimé) */}
          <section className="destination-card">
            <img src="cascade.jpg" alt="Vue des Plateaux" className="destination-image" />
            <div className="card-content">
              <div className="city-region-header">
                <h3>Kpalimé</h3>
                <span className="region-tag plateaux"><FaMapMarkerAlt /> Plateaux</span>
              </div>
              <p className="description">
                Nichée dans les montagnes, Kpalimé est le paradis des amoureux de la nature. Ses cascades spectaculaires, ses forêts tropicales et ses plantations de café en font une destination incontournable pour l'écotourisme.
              </p>
              <h4>Points d'intérêt:</h4>
              <div className='interest-points-wrapper'>
                <span className="interest-tag"><FaWater /> Cascade de Womé</span>
                <span className="interest-tag"><FaMountain /> Mont Agou</span>
                <span className="interest-tag"><FaTree /> Forêt de Missahöhé</span>
                <span className="interest-tag"><FaCoffee /> Plantations de café</span>
              </div>
              <div className="card-footer">
                <p className="best-period"><FaRegCalendarAlt /> Meilleure période : Octobre à Avril</p>
                <Link to="/Contact" className="book-button">Réserver</Link>
              </div>
            </div>
          </section>

          {/* CARTE DE KARA */}
          <section className="destination-card">
            <img src="kara.jpg" alt="Vue des Savanes" className="destination-image" />
            <div className="card-content">
              <div className="city-region-header">
                <h3>Kara</h3>
                <span className="region-tag savanes">Kara</span>
              </div>
              <p className="description">
                Terre des traditions Kabyè, Kara offre une plongée authentique dans la culture togolaise. Ses villages traditionnels, ses marchés d'artisanat et ses paysages de savane en font une destination culturelle unique.
              </p>
              <h4>Points d'intérêt:</h4>
              <div className='interest-points-wrapper'>
                <span className="interest-tag"><FaLandmark /> Villages Kabyè</span>
                <span className="interest-tag"><FaStore /> Marché de Kara</span>
                <span className="interest-tag"><FaPagelines /> Artisanat local</span>
                <span className="interest-tag"><MdLandscape /> Paysages de savane</span>
              </div>
              <div className="card-footer">
                <p className="best-period"><FaRegCalendarAlt /> Meilleure période : Novembre à Février</p>
                <Link to="/Contact" className="book-button">Réserver</Link>
              </div>
            </div>
          </section>

          {/* CARTE DE SOKODÉ */}
          <section className="destination-card">
            <img src="tem.jpg" alt="Vue des Savanes" className="destination-image" />
            <div className="card-content">
              <div className="city-region-header">
                <h3>Sokodé</h3>
                <span className="region-tag savanes"><FaMapMarkerAlt /> Centrale</span>
              </div>
              <p className="description">
                Carrefour commercial historique, Sokodé est réputée pour ses traditions Tem et ses festivals colorés. La ville offre un aperçu fascinant de la diversité culturelle du Togo central.
              </p>
              <h4>Points d'intérêt:</h4>
              <div className='interest-points-wrapper'>
                <span className="interest-tag"><FaStore /> Marché central</span>
                <span className="interest-tag"><FaLandmark /> Festivals Tem</span>
                <span className="interest-tag"><MdOutlineArchitecture /> Architecture traditionnelle</span>
                <span className="interest-tag"><FaPagelines /> Artisanat textile</span>
              </div>
              <div className="card-footer">
                <p className="best-period"><FaRegCalendarAlt /> Meilleure période : Décembre à Mars</p>
                <Link to="/Contact" className="book-button">Réserver</Link>
              </div>
            </div>
          </section>

          {/* CARTE D'ANÉHO */}
          <section className="destination-card">
            <img src="aneho.jpg" alt="Vue des Savanes" className="destination-image" />
            <div className="card-content">
              <div className="city-region-header">
                <h3>Aného</h3>
                <span className="region-tag savanes"><FaMapMarkerAlt /> Maritime</span>
              </div>
              <p className="description">
                Ancienne capitale coloniale, Aného charme par son patrimoine historique et ses plages préservées. Ses maisons coloniales et son ambiance paisible en font une destination parfaite pour la détente.
              </p>
              <h4>Points d'intérêt:</h4>
              <div className='interest-points-wrapper'>
                <span className="interest-tag"><MdOutlineArchitecture /> Architecture coloniale</span>
                <span className="interest-tag"><MdPool /> Plages tranquilles</span>
                <span className="interest-tag"><MdMuseum /> Musée d'Aného</span>
                <span className="interest-tag"><FaWater /> Lagune côtière</span>
              </div>
              <div className="card-footer">
                <p className="best-period"><FaRegCalendarAlt /> Meilleure période : Novembre à Avril</p>
                <Link to="/Contact" className="book-button">Réserver</Link>
              </div>
            </div>
          </section>

          {/* CARTE DE DAPAONG */}
          <section className="destination-card">
            <img src="keran.webp" alt="Vue des Savanes" className="destination-image" />
            <div className="card-content">
              <div className="city-region-header">
                <h3>Dapaong</h3>
                <span className="region-tag savanes"><FaMapMarkerAlt /> Savanes</span>
              </div>
              <p className="description">
                Porte d'entrée du nord du Togo, Dapaong offre des paysages de savane à perte de vue et une culture riche. C'est le point de départ idéal pour explorer les parcs nationaux et rencontrer les communautés locales.
              </p>
              <h4>Points d'intérêt:</h4>
              <div className='interest-points-wrapper'>
                <span className="interest-tag"><FaSafari /> Parc National Oti-Kéran</span>
                <span className="interest-tag"><FaLandmark /> Villages traditionnels</span>
                <span className="interest-tag"><MdLandscape /> Savane africaine</span>
                <span className="interest-tag"><FaPagelines /> Artisanat du Nord</span>
              </div>
              <div className="card-footer">
                <p className="best-period"><FaRegCalendarAlt /> Meilleure période : Novembre à Mars</p>
                <Link to="/Contact" className="book-button">Réserver</Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}