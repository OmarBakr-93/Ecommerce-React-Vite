import { useState } from 'react'
import Rating from '../rating/Rating'
import { Link } from 'react-router'

export default function Offers({offer}) {
  const {title, firstImage, secondImage, price, discount, rating, reviews, id} = offer
  const [ImageSrc, setImageSrc] = useState(firstImage)
  const finalPrice = price -(discount*price)/100
  return (
    <div className="offers">
      <div className="offer-img-wrapper">
        <img onMouseEnter={() => setImageSrc(secondImage)} onMouseLeave={() => setImageSrc(firstImage)} className="offer-img" src={ImageSrc} alt={title} />
      </div>
      <div className="offer-info">
        <h5 className="offer-title">
          {title}
        </h5>
        <Rating rating={rating} reviews={reviews} />
        <div className="offer-price">
          <b className="offer-price-item">${price}</b>
          <b className="offer-finial-price">${finalPrice}</b>
        </div>
        <Link to={`/special-offer/${offer.id}`} className="offer-see-more">
          شاهد المزيد
        </Link>
        <div className="offer-discount">خصم {discount}%</div>
      </div>
    </div>
  )
}
