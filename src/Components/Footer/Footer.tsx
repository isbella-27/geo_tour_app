import './Footer.css'; // On importe le fichier de styles
import { Link } from 'react-router-dom'; // Utilisez Link si vous avez React Router

export default function Footer() {
    // Année courante pour le copyright
    const currentYear = new Date().getFullYear();

    return (
        <footer className="app-footer">
            <div className="footer-content">

                {/* --- Section 1: Logo et Mission --- */}
                <div className="footer-section footer-brand">
                    <h3>GeoTour Togo</h3>
                    <p>
                        Découvrez la beauté et la richesse culturelle du Togo.
                        Votre guide pour des voyages authentiques.
                    </p>
                    <div className="footer-social">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">FB</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">TW</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">IG</a>
                    </div>
                </div>

                {/* --- Section 2: Liens Rapides (Navigation) --- */}
                <div className="footer-section">
                    <h4>Navigation</h4>
                    <ul>
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/destinations">Destinations</Link></li>
                        <li><Link to="/regions">Régions</Link></li>
                        <li><Link to="/reservations">Réserver</Link></li>
                    </ul>
                </div>

                {/* --- Section 3: Informations Légales/Aide --- */}
                <div className="footer-section">
                    <h4>Informations</h4>
                    <ul>
                        <li><Link to="/about">À Propos</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/terms">Conditions d'utilisation</Link></li>
                        <li><Link to="/privacy">Politique de confidentialité</Link></li>
                    </ul>
                </div>

                {/* --- Section 4: Contact --- */}
                <div className="footer-section">
                    <h4>Nous Contacter</h4>
                    <p>Lomé, Togo</p>
                    <p>Email: contact@togotourisme.com</p>
                    <p>Téléphone: (+228) 90 00 00 00</p>
                </div>

            </div>

            <div className="footer-bottom">
                <p>&copy; {currentYear} Togo Tourisme. Tous droits réservés.</p>
            </div>
        </footer>
    );
}