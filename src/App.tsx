import Header from './Components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router';
import Accueil from './Pages/Accueil/Accueil';
import Destination from './Pages/Destination/Destination';
import Hebergement from './Pages/Hebergement/Hebergement';
import Culture from './Pages/Culture/Culture';
import Cuisine from './Pages/Cuisine/Cuisine';
import Activite from './Pages/Activite/Activite';
import Contact from './Pages/Contact/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Destination" element={<Destination />} />
        <Route path="/Hebergement" element={< Hebergement />} />
        <Route path="/Culture" element={<Culture />} />
        <Route path="/Cuisine" element={<Cuisine />} />
        <Route path="/Activite" element={<Activite />} />
        <Route path="/Contact" element={<Contact />} />
      
      </Routes>
    </BrowserRouter>

  )
}
