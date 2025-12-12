import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import './Contact.css';
import ContacteMap from "../../Components/ContacteMap/ContacteMap";

// ⭐️ Importez le composant de carte que vous avez créé ⭐️

// ⚠️ VOS CLÉS EMAILJS ⚠️
const YOUR_SERVICE_ID = 'service_qn19858';
const YOUR_TEMPLATE_ID = 'template_98t02vk';
const YOUR_PUBLIC_KEY = 'ITAK-PdOs3VpFbB29';
// -----------------------------------------------------------

const initialFormState = {
  name: '',
  email: '',
  phone: '', // Ajout du champ téléphone
  subject: '',
  message: ''
};

export default function Contact() {

  const formRef = useRef(null);
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Limiter le champ message à 500 caractères comme spécifié dans le design
    if (name === 'message' && value.length > 500) {
      return;
    }

    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.subject === "") {
      setStatus('Veuillez sélectionner un sujet pour votre demande.');
      return;
    }

    setStatus('Envoi en cours...');

    emailjs.sendForm(
      YOUR_SERVICE_ID,
      YOUR_TEMPLATE_ID,
      formRef.current,
      { publicKey: YOUR_PUBLIC_KEY }
    )
      .then(() => {
        setStatus('Message envoyé avec succès !');
        setFormData(initialFormState);
      }, (error) => {
        console.error('Erreur EmailJS:', error.text);
        setStatus(`Échec de l\'envoi. Erreur : ${error.text}`);
      });
  };

  return (
    <>
      {/* -------------------- 1. BANDEAU D'ACCUEIL (Header) - PLEINE LARGEUR -------------------- */}
      <div className="contact-header-section">
        <div className="contact-content-wrapper">
          <h1 className="contact-main-title">Contactez-nous</h1>
          <p className="contact-description">
            Notre équipe d'experts est à votre disposition pour organiser
            votre voyage au Togo
          </p>
        </div>
      </div>

      {/* -------------------- 2. CONTENEUR PRINCIPAL LIMITÉ (Formulaire et Bureaux) -------------------- */}
      <div className="contact-page-container">

        <div className="contact-form-section">

          {/* Colonne 1 : Le Formulaire */}
          <div className="form-container-wrapper">
            <h2 className="form-section-title">Envoyez-nous un message</h2>

            <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>

              {/* Groupe Nom et Email sur la même ligne */}
              <div className="form-group-inline">
                <div className="form-group">
                  <label htmlFor="name">Nom complet *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Groupe Téléphone et Sujet sur la même ligne */}
              <div className="form-group-inline">
                <div className="form-group">
                  <label htmlFor="phone">Téléphone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Sujet</label>
                  <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required>
                    <option value="" disabled hidden>Sélectionnez un sujet</option>
                    <option value="Demande d'informations">Demande d'informations</option>
                    <option value="Réservation">Réservation</option>
                    <option value="Circuit personnalisé">Circuit personnalisé</option>
                    <option value="Voyage de groupe">Voyage de groupe</option>
                    <option value="Autres">Autres</option>
                  </select>
                </div>
              </div>

              {/* Champ Message (Pleine largeur) */}
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre projet de voyage ou votre demande..."
                  maxLength={500} // Limite la saisie
                  required
                ></textarea>
                <div className="char-count">{formData.message.length}/500 caractères</div>
              </div>

              {/* Bouton d'envoi et affichage du statut */}
              <button type="submit" className="submit-button" disabled={status === 'Envoi en cours...'}>
                {status === 'Envoi en cours...' ? 'Envoi...' : 'Envoyer le message'}
              </button>

              {status && <p className={`status-message ${status.includes('succès') ? 'success' : 'error'}`}>{status}</p>}
            </form>
          </div>

          {/* Colonne 2 : Nos Bureaux - LOMÉ ET KPALIMÉ ⭐️ Ajout du bureau Kpalimé ⭐️ */}
          <div className="offices-container">
            <h2 className="offices-section-title">Nos Bureaux</h2>

            {/* Bureau Lomé */}
            <div className="office-detail">
              <h3>Lomé</h3>
              <p><FaMapMarkerAlt className="contact-icon" /> Boulevard du 13 Janvier, Lomé</p>
              <p><FaPhone className="contact-icon" /> +228 22 XX XX XX</p>
              <p><FaEnvelope className="contact-icon" /> lome@togo-tourisme.com</p>
              <p><FaClock className="contact-icon" /> Lun-Ven : 8h-17h; Sam : 8h-12h</p>
            </div>


            <ContacteMap />

          </div>
        </div>
      </div>
    </>
  );
}