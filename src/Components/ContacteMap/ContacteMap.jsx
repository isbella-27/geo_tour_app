import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; 

// Import et correction des icônes de marqueur par défaut
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    iconRetinaUrl: iconRetina,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

// Coordonnées précises pour Lomé (Latitude, Longitude)
const LOME_POSITION = [6.1674892939695525, 1.230109913828258];


export default function ContacteMap() { // ⭐️ Le 'e' est conservé ici
  return (
    <div className="map-section">
      <h2 className="section-title">Localisation</h2>
      
      <div className="map-wrapper">
          {/* MapContainer : Centrée sur Lomé avec zoom 13. */}
          <MapContainer 
              center={LOME_POSITION} 
              zoom={13} 
              scrollWheelZoom={false}
              style={{ height: '400px', width: '100%' }}
          >
              <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              
              {/* Marqueur UNIQUEMENT pour Lomé */}
              <Marker position={LOME_POSITION}>
                  <Popup>
                      **Lomé** <br/> Boulevard du 13 Janvier
                  </Popup>
              </Marker>
              
          </MapContainer>
      </div>
    </div>
  )
}