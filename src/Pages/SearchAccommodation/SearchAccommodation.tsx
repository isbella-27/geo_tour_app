import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './SearchAccommodation.css';

// 1. IMPORTATION DES ICÔNES DE REACT ICONS
import { FaCalendarAlt, FaUserFriends, FaSearch, FaAngleDown } from 'react-icons/fa';

// Le composant reçoit activeFilter et setActiveFilter via les props
export default function SearchAccommodation({ activeFilter, setActiveFilter }) {
    
    // Les états des dates et des voyageurs restent locaux
    const [arrivalDate, setArrivalDate] = useState(null); 
    const [departureDate, setDepartureDate] = useState(null);
    const [travelers, setTravelers] = useState('2 personnes');
    
    const [errorMessage, setErrorMessage] = useState('');

    const handleSearch = () => {
        setErrorMessage(''); 

        if (!arrivalDate || !departureDate) {
            setErrorMessage('Veuillez sélectionner les dates d\'arrivée et de départ.');
            return;
        }

        // On utilise activeFilter provenant des props
        console.log({ arrivalDate, departureDate, travelers, activeFilter });
        alert(`Recherche pour :
            Arrivée: ${arrivalDate.toLocaleDateString()}
            Départ: ${departureDate.toLocaleDateString()}
            Voyageurs: ${travelers}
            Filtre: ${activeFilter}`);
    };

    const filters = [
        'Tous les hébergements',
        'Hôtels',
        'Lodges Écologiques',
        'Auberges',
        'Stations balnéaires',
    ];

    return (
        <div className="search-accommodation-section">
            <div className="search-card">
                <h2>Rechercher un Hébergement</h2>
                <div className="search-inputs">
                    
                    {/* INPUT 1: ARRIVÉE */}
                    <div className="input-group">
                        <label htmlFor="arrival">Arrivée</label>
                        <div className="date-input-wrapper">
                            <DatePicker
                                selected={arrivalDate}
                                onChange={(date) => setArrivalDate(date)}
                                dateFormat="dd/MM/yyyy"
                                placeholderText="jj/mm/aaaa"
                                className="custom-datepicker-input"
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                            />
                            {/* ICÔNE CALENDRIER */}
                            <span className="calendar-icon">
                                <FaCalendarAlt />
                            </span>
                        </div>
                    </div>

                    {/* INPUT 2: DÉPART */}
                    <div className="input-group">
                        <label htmlFor="departure">Départ</label>
                        <div className="date-input-wrapper">
                            <DatePicker
                                selected={departureDate}
                                onChange={(date) => setDepartureDate(date)}
                                dateFormat="dd/MM/yyyy"
                                placeholderText="jj/mm/aaaa"
                                className="custom-datepicker-input"
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                minDate={arrivalDate}
                            />
                            {/* ICÔNE CALENDRIER */}
                            <span className="calendar-icon">
                                <FaCalendarAlt />
                            </span>
                        </div>
                    </div>

                    {/* INPUT 3: VOYAGEURS */}
                    <div className="input-group">
                        <label htmlFor="travelers">Voyageurs</label>
                        <div className="select-wrapper">
                            {/* ICÔNE VOYAGEURS (placée avant le select) */}
                            <span className="travelers-icon">
                                <FaUserFriends />
                            </span>
                            <select
                                id="travelers"
                                value={travelers}
                                onChange={(e) => setTravelers(e.target.value)}
                            >
                                <option value="1 personne">1 personne</option>
                                <option value="2 personnes">2 personnes</option>
                                <option value="3 personnes">3 personnes</option>
                                <option value="4 personnes">4 personnes</option>
                                <option value="5+ personnes">5+ personnes</option>
                            </select>
                            {/* ICÔNE FLÈCHE DE SÉLECTION */}
                            <span className="select-arrow">
                                <FaAngleDown />
                            </span>
                        </div>
                    </div>

                    {/* BOUTON DE RECHERCHE */}
                    <button className="search-button" onClick={handleSearch}>
                        <FaSearch className="search-icon" /> Rechercher
                    </button>
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>

            <div className="filter-buttons">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        className={`filter-button ${activeFilter === filter ? 'active' : ''}`}
                        onClick={() => setActiveFilter(filter)}
                    >
                        {filter}
                    </button>
                ))}
            </div>
        </div>
    );
}