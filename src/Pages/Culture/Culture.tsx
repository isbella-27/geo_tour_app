import './Culture.css';
import {
  FaCheckCircle,      // Pour les points d'intérêt (✓)
  FaMapMarkerAlt,     // Pour la localisation (📍)
  FaCalendarAlt       // Pour les dates des festivals (🗓️)
} from 'react-icons/fa';


export default function Culture() {
  return (
    <div>
      {/* SECTION BANDEAU SUPÉRIEUR */}
      <div className="culture-header-section">
        <h1>Culture Togolaise</h1>
        <p>Plongez dans la richesse des traditions millénaires et de la diversité culturelle du Togo</p>
      </div>

      {/* SECTION DES TRADITIONS ANCESTRALES (EXISTANTE) */}
      <div className="traditions-ancestrales-section">
        <h2 className="section-main-title">Traditions ancestrales</h2>
        <p className="section-main-subtitle">Découvrez les piliers de la culture togolaise, transmise de génération en génération</p>

        <div className="tradition-content-wrapper">

          {/* BLOC 1: Vaudou Togolais */}
          <div className="tradition-block image-left">
            <div className="tradition-image-container">
              {/* NOTE: Pensez à remplacer 'fazao.jpeg' par des images spécifiques à chaque thème */}
              <img src="vaudou.png" alt="Marché des féticheurs à Lomé" className="tradition-image" />
            </div>
            <div className="tradition-text-content">
              <h3 className="tradition-name">Vaudou Togolais</h3>
              <p className="tradition-description">
                Religion ancestrale profondément enracinée dans la culture togolaise, le vaudou est pratiqué avec respect et dévotion. Découvrez les rituels, les divinités et l'importance spirituelle de cette tradition millénaire.
              </p>
              <div className="points-of-interest">
                <h4>Points d'intérêt:</h4>
                <ul>
                  {/* Utilisation de FaCheckCircle */}
                  <li><FaCheckCircle className="check-icon" /> Marché des féticheurs</li>
                  <li><FaCheckCircle className="check-icon" /> Cérémonies traditionnelles</li>
                  <li><FaCheckCircle className="check-icon" /> Tradition de Guérisseurs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* BLOC 2: Artisanat traditionnel */}
          <div className="tradition-block image-right">
            <div className="tradition-image-container">
              <img src="arti.png" alt="Tissage Kente traditionnel togolais" className="tradition-image" />
            </div>
            <div className="tradition-text-content">
              <h3 className="tradition-name">Artisanat traditionnel</h3>
              <p className="tradition-description">
                L'artisanat togolais reflète la richesse culturelle du pays. Des tissus Kente aux sculptures colorées en bois, chaque pièce raconte une histoire et perpétue un savoir-faire ancestral transmis de génération en génération.
              </p>
              <div className="points-of-interest">
                <h4>Points d'intérêt:</h4>
                <ul>
                  {/* Utilisation de FaCheckCircle */}
                  <li><FaCheckCircle className="check-icon" /> Tissage Kente</li>
                  <li><FaCheckCircle className="check-icon" /> Sculpture sur bois</li>
                  <li><FaCheckCircle className="check-icon" /> Poterie traditionnelle</li>
                  <li><FaCheckCircle className="check-icon" /> Bijoux en bronze</li>
                </ul>
              </div>
            </div>
          </div>

          {/* BLOC 3: Architecture Koutammakou */}
          <div className="tradition-block image-left">
            <div className="tradition-image-container">
              <img src="danse.png" alt="Maisons Tata Somba du Koutammakou" className="tradition-image" />
            </div>
            <div className="tradition-text-content">
              <h3 className="tradition-name">Architecture Koutammakou</h3>
              <p className="tradition-description">
                Classé au patrimoine mondial de l'UNESCO, le Koutammakou est célèbre pour ses habitations traditionnelles en terre, appelées *Tata Somba*. Ces châteaux miniatures sont le symbole de l'ingéniosité architecturale des Batammariba.
              </p>
              <div className="points-of-interest">
                <h4>Points d'intérêt:</h4>
                <ul>
                  {/* Utilisation de FaCheckCircle */}
                  <li><FaCheckCircle className="check-icon" /> Visite des *Tata Somba*</li>
                  <li><FaCheckCircle className="check-icon" /> Rencontre avec les Batammariba</li>
                  <li><FaCheckCircle className="check-icon" /> Paysages montagneux du nord</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION : DIVERSITÉ ETHNIQUE (EXISTANTE) */}
      {/* ------------------------------------------------------------------ */}
      <div className="diversite-ethnique-section">
        <h2 className="section-main-title">Diversité ethnique</h2>
        <p className="section-main-subtitle description-centre">
          Le Togo abrite plus de 40 ethnies, chacune apportant sa richesse culturelle unique.
        </p>

        <div className="ethnie-card-wrapper">

          {/* CARTE 1: Éwé */}
          <div className="ethnie-card ewe-card">
            <div className="ethnie-header">
              <h3 className="ethnie-name">Éwé</h3>
              <div className="ethnie-population">
                Population
                <p className="population-percentage">40%</p>
              </div>
            </div>
            <div className="ethnie-body">
              {/* Utilisation de FaMapMarkerAlt */}
              <p className="ethnie-region"><FaMapMarkerAlt /> Région : **Sud**</p>
              <p className="ethnie-description">
                Principale ethnie du sud du Togo, les Éwé sont réputés pour leur riche tradition orale, leurs danses colorées et leur maîtrise de l'artisanat textile.
              </p>
              <div className="specialites-wrapper">
                <h4>Spécialités culturelles :</h4>
                <div className="tags-container">
                  <span className="culture-tag">Tissage Kente</span>
                  <span className="culture-tag">Contes tradition</span>
                  <span className="culture-tag">Danse Agbadza</span>
                </div>
              </div>
            </div>
          </div>

          {/* CARTE 2: Kabyè */}
          <div className="ethnie-card kabye-card">
            <div className="ethnie-header">
              <h3 className="ethnie-name">Kabyè</h3>
              <div className="ethnie-population">
                Population
                <p className="population-percentage">22%</p>
              </div>
            </div>
            <div className="ethnie-body">
              {/* Utilisation de FaMapMarkerAlt */}
              <p className="ethnie-region"><FaMapMarkerAlt /> Région : **Nord**</p>
              <p className="ethnie-description">
                Peuple du nord montagneux, les Kabyè sont célèbres pour leur architecture traditionnelle et leurs techniques agricoles innovantes en terrasses.
              </p>
              <div className="specialites-wrapper">
                <h4>Spécialités culturelles :</h4>
                <div className="tags-container">
                  <span className="culture-tag">Architecture en terre</span>
                  <span className="culture-tag">Agriculture en terrasses</span>
                  <span className="culture-tag">Lutte traditionnelle</span>
                </div>
              </div>
            </div>
          </div>

          {/* CARTE 3: Tem */}
          <div className="ethnie-card tem-card">
            <div className="ethnie-header">
              <h3 className="ethnie-name">Tem</h3>
              <div className="ethnie-population">
                Population
                <p className="population-percentage">8%</p>
              </div>
            </div>
            <div className="ethnie-body">
              {/* Utilisation de FaMapMarkerAlt */}
              <p className="ethnie-region"><FaMapMarkerAlt /> Région : **Centre**</p>
              <p className="ethnie-description">
                Ethnie du centre du Togo, les Tem sont reconnus pour leur organisation sociale sophistiquée et leurs festivals colorés.
              </p>
              <div className="specialites-wrapper">
                <h4>Spécialités culturelles :</h4>
                <div className="tags-container">
                  <span className="culture-tag">Festivals Tem</span>
                  <span className="culture-tag">Organisation sociale</span>
                  <span className="culture-tag">Artisanat du fer</span>
                </div>
              </div>
            </div>
          </div>

          {/* CARTE 4: Mina */}
          <div className="ethnie-card mina-card">
            <div className="ethnie-header">
              <h3 className="ethnie-name">Mina</h3>
              <div className="ethnie-population">
                Population
                <p className="population-percentage">7%</p>
              </div>
            </div>
            <div className="ethnie-body">
              {/* Utilisation de FaMapMarkerAlt */}
              <p className="ethnie-region"><FaMapMarkerAlt /> Région : **Côte**</p>
              <p className="ethnie-description">
                Peuple côtier, les Mina excellent dans la pêche traditionnelle et le commerce maritime, gardiens des traditions maritimes du Togo.
              </p>
              <div className="specialites-wrapper">
                <h4>Spécialités culturelles :</h4>
                <div className="tags-container">
                  <span className="culture-tag">Pêche traditionnelle</span>
                  <span className="culture-tag">Commerce maritime</span>
                  <span className="culture-tag">Cuisine de poisson</span>
                </div>
              </div>
            </div>
          </div>

        </div> {/* Fin .ethnie-card-wrapper */}
      </div> {/* Fin .diversite-ethnique-section */}

      {/* ------------------------------------------------------------------ */}
      {/* SECTION : FESTIVALS CULTURELS (NOUVELLE SECTION) */}
      {/* ------------------------------------------------------------------ */}
      <div className="festivals-section">
        <h2 className="section-main-title">Festivals culturels</h2>
        <p className="section-main-subtitle" style={{ marginBottom: '40px' }}>
          Participez aux célébrations qui rythment la vie culturelle togolaise
        </p>

        <div className="festival-card-wrapper">

          {/* CARTE 1 : Festival Yeké Yeké */}
          <div className="festival-card">
            <img src="cul1.png" alt="Festival Yeké Yeké" className="festival-image" />
            <div className="festival-content">
              <h3 className="festival-title">Festival Yeké Yeké</h3>
              <div className="festival-info">
                {/* Utilisation de FaMapMarkerAlt */}
                <span className="festival-location"><FaMapMarkerAlt /> Kpalimé</span>
                {/* Utilisation de FaCalendarAlt */}
                <span className="festival-date"><FaCalendarAlt /> Août</span>
              </div>
              <p className="festival-description">
                Festival célébrant la culture Ewé avec des danses traditionnelles, de la musique et de l'artisanat local.
              </p>
            </div>
          </div>

          {/* CARTE 2 : Festival des Divinités Noires */}
          <div className="festival-card">
            <img src="cul2.png" alt="Festival des Divinités Noires" className="festival-image" />
            <div className="festival-content">
              <h3 className="festival-title">Festival des Divinités Noires</h3>
              <div className="festival-info">
                {/* Utilisation de FaMapMarkerAlt */}
                <span className="festival-location"><FaMapMarkerAlt /> Aného</span>
                {/* Utilisation de FaCalendarAlt */}
                <span className="festival-date"><FaCalendarAlt /> Septembre</span>
              </div>
              <p className="festival-description">
                Célébration spirituelle importante mettant en valeur les traditions vaudou et les croyances ancestrales.
              </p>
            </div>
          </div>

          {/* CARTE 3 : Festival Ovazu */}
          <div className="festival-card">
            <img src="cul3.png" alt="Festival Ovazu" className="festival-image" />
            <div className="festival-content">
              <h3 className="festival-title">Festival Ovazu</h3>
              <div className="festival-info">
                {/* Utilisation de FaMapMarkerAlt */}
                <span className="festival-location"><FaMapMarkerAlt /> Kara</span>
                {/* Utilisation de FaCalendarAlt */}
                <span className="festival-date"><FaCalendarAlt /> Décembre</span>
              </div>
              <p className="festival-description">
                Festival Kabyè célèbre la fin des récoltes avec des danses, des chants et des démonstrations d'artisanat.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}