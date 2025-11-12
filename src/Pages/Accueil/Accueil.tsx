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
            <h3>Marché des Féticheurs</h3>
            <p>Lomé , Région Maritime</p>
            <p></p>
            <Button className='' label='Voir les détails'/>
          </section>
          <section>
            <img src="Akodess.webp" alt="" />
            <h3>Marché des Féticheurs</h3>
            <p>Lomé , Région Maritime</p>
            <p></p>
            <Button className='' label='Voir les détails'/>
          </section>
          <section>
            <img src="Akodess.webp" alt="" />
            <h3>Marché des Féticheurs</h3>
            <p>Lomé , Région Maritime</p>
            <p></p>
            <Button className='' label='Voir les détails'/>
          </section>
          <section>
            <img src="Akodess.webp" alt="" />
            <h3>Marché des Féticheurs</h3>
            <p>Lomé , Région Maritime</p>
            <p></p>
            <Button className='' label='Voir les détails'/>
          </section>
        </div>
      </div>
    </div>
  )
}
