import './special-offers.css'
import {specialOffers} from '../../data/special-offers.js'
import Offers from './Offers.jsx'

export default function SpecialOffers() {
  return (
    <div className="special-offers">
      <h1 className='special-offers-title'>عروض كبيرة لليوم  
        <span className="special-offers-icon-wrapper">
          <i className="bi bi-stopwatch"></i>لمدة 24 ساعة بس 
        </span>
      </h1>
        <div className="special-offers-wrapper">
          {specialOffers.map((offer) => (
          <Offers key={offer.id} offer={offer} />
          ))}
        </div>
    </div>
  )
}
