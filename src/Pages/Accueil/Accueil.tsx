import Button from '../../Components/Button/Button'
import './Accueil.css'
export default function Accueil() {
  return (
    <div className="accueil-container">
      <h1>Découvrez le Togo</h1>
      <p>Un voyage authentique au cœur de l'Afrique de l'Ouest, entre <br /> traditions milénaires et paysages époustouflants </p>
      <div className='button'>
        <Button className='' label='Découvrir les destinations' type='submit' />
        <Button className='' label='Réservez un séjour' type='submit' />

      </div>

    </div>
  )
}
