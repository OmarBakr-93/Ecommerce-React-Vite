import { useParams } from "react-router"
import { specialOffers } from "../../data/special-offers"
import Rating from "../../components/rating/Rating"
import './style.css'
import { useState } from "react"
import ProductDescription from "./ProductDescription"

export default function SpecialOfferPage() {
  const {id} = useParams()
  const product = specialOffers.find(p => p.id === parseInt(id))

  const [images, rating, reviews, title, price, discount] = product
  const {imgIndex,setImgIndex} = useState(0)
  return (
    <>
    <div className="special-offer-page">
      <div className="special-offer-page-img-wrapper">
        <img src={images[imgIndex]} alt="" className="special-offer-page-img" />
        <div className="special-offer-page-select-img">
          {images.map((image, index) => (
            <img onClick={() => setImgIndex(index)} src={image} alt="" className="select-img" key={index} />
          ))}
        </div>
      </div>
      <div className="special-offer-page-info">
        <h3 className="special-offer-page-title">{title}</h3>
        <Rating rating={rating} reviews={reviews} />
        <div className="special-offer-page-price">
          <b className="special-offer-price-item">${price}</b>
          <b className="special-offer-final-price">${price - (discount * price) / 100}</b>
        </div>
        <div className="special-page-add-to">
          <div>الكمية</div>
          <input type="number" min={1} max={10}/>
          <button className="add-to-cart-btn">اضافة للسلة</button>
        </div>
      </div>
    </div>
    <ProductDescription />
    </>
  )
}
