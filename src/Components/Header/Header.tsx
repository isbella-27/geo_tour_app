import { Link } from 'react-router-dom'
import './Header.css'
export default function Header() {
    return (
        <nav>
            <div className="home">
                <Link to="/"><img src="geologo.png" alt="Logo" /></Link>
            </div>
            <ul className="all">
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/Destination">Destinations</Link></li>
                <li><Link to="/Hebergement">Hébergements</Link></li>
                <li><Link to="/Culture">Cultures</Link></li>
                <li><Link to="/Cuisine">Cuisines</Link></li>
                <li><Link to="/Activite">Activités</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </nav>

    )
}
