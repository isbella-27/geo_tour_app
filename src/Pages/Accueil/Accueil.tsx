import Button from '../../Components/Button/Button'
import './Accueil.css'
export default function Accueil() {
  return (
    <div>
      <div className="accueil-container">

        <h1>Découvrez le Togo</h1>
        <p>Un voyage authentique au cœur de l'Afrique de l'Ouest, entre <br /> traditions milénaires et paysages époustouflants </p>
        <div className='button'>
          <Button className='' label='Découvrir les destinations' type='submit' />
          <Button className='sejour' label='Réservez un séjour' type='submit' />

        </div>
      </div>

      
    <div>
      <div className="accueil-container">

        <h1>Découvrez le Togo</h1>
        <p>Un voyage authentique au cœur de l'Afrique de l'Ouest, entre <br /> traditions milénaires et paysages époustouflants </p>
        <div className='button'>
          <Button className='' label='Découvrir les destinations' type='submit' />
          <Button className='sejour' label='Réservez un séjour' type='submit' />

        </div>
      </div>

      <div>
        <h1>Sites Touristiques du Togo</h1>
        <div className='grid'>
          <section>
            <img src="Akodess.webp" alt="" />
            <h3>Marché des Féticheurs</h3>
            <p>Lomé , Région Maritime</p>
            <p></p>
            <Button className='' label='Voir les détails'/>
          </section>
          <section>
            <img src="det1.jpg" alt="" />
            <h3>Plage de Lomé</h3>
            <p>Lomé , Région Maritime</p>
            <p></p>
            <Button className='' label='Voir les détails'/>
          </section>
          <section>
            <img src="cascade.jpg" alt="" />
            <h3>Cascade de Kpimé</h3>
            <p>Kpalimé , Région des Plateaux</p>
            <p></p>
            <Button className='' label='Voir les détails'/>
          </section>
          <section>
            <img src="Fazao.jpg" alt="" />
            <h3>Mont Agou</h3>
            <p>Kpalimé , Région des Plateaux</p>
            <p></p>
            <Button className='' label='Voir les détails'/>
          </section>
          <section>
            <img src="fazao.jpeg" alt="" />
            <h3>Parc National de Fazao-Malfakassa</h3>
            <p>Sokodé , Région Centrale</p>
            <p></p>
            <Button className='' label='Voir les détails'/>
          </section>
          <section>
            <img src="chateau.jpeg" alt="" />
            <h3>Château Vial</h3>
            <p>Kpalimé , Région des Plateaux</p>
            <p></p>
            <Button className='' label='Voir les détails'/>
          </section>
          <section>
            <img src="Koutamakou.webp" alt="" />
            <h3>Vallée de Tamberma</h3>
            <p>Kéran , Région des Savanes</p>
            <p></p>
            <Button className='' label='Voir les détails'/>
          </section>
          <section>
            <img src="amého.jpeg" alt="" />
            <h3>Lac Togo</h3>
            <p>Aného , Région Maritime</p>
            <p></p>
            <Button className='' label='Voir les détails'/>
          </section>
          <section>
            <img src="cul.jpg" alt="" />
            <h3>Marché de Kara</h3>
            <p>Kara , Région de la Kara</p>
            <p></p>
            <Button className='' label='Voir les détails'/>
          </section>
          <section>
            <img src="keran.webp" alt="" />
            <h3>Parc National de kéran</h3>
            <p>Kéran , Région de la Kara</p>
            <p></p>
            <Button className='' label='Voir les détails'/>
          </section>
        </div>
      </div>
      <div className='region'>
        <h1>Régions à explorer</h1>
        <div className='region-grid'>
          <section> 
            <h3>Région Maritime</h3>
            <p>5 villes à découvrir</p>
            {/* 🛑 Ajout du conteneur pour l'alignement horizontal */}
            <div className='region-buttons-wrapper'>
              <button>Lomé</button>
              <button>Aného</button>
              <button>Tsévié</button>
              <button>+2</button>
            </div>
          </section>
          <section> 
            <h3>Région des Plateaux</h3>
            <p>5 villes à découvrir</p>
            {/* 🛑 Ajout du conteneur pour l'alignement horizontal */}
            <div className='region-buttons-wrapper'>
              <button>Atakpamé</button>
              <button>Kpalimé</button>
              <button>Badou</button>
              <button>+2</button>
            </div>
          </section>
          <section> 
            <h3>Région Centrale</h3>
            <p>5 villes à découvrir</p>
            {/* 🛑 Ajout du conteneur pour l'alignement horizontal */}
            <div className='region-buttons-wrapper'>
              <button>Sokodé</button>
              <button>Tchamba</button>
              <button>Blitta</button>
              <button>+2</button>
            </div>
          </section>
          <section> 
            <h3>Région de la Kara</h3>
            <p>4 villes à découvrir</p>
            {/* 🛑 Ajout du conteneur pour l'alignement horizontal */}
            <div className='region-buttons-wrapper'>
              <button>Kara</button>
              <button>Bassar</button>
              <button>Niamtougou</button>
              <button>+1</button>
            </div>
          </section>
          <section> 
            <h3>Région des Savanes</h3>
            <p>4 villes à découvrir</p>
            {/* 🛑 Ajout du conteneur pour l'alignement horizontal */}
            <div className='region-buttons-wrapper'>
              <button>Dapaong</button>
              <button>Mango</button>
              <button>Gando</button>
              <button>+1</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  
    </div>
  )
}
