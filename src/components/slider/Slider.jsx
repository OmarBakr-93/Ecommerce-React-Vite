import Rating from '../rating/Rating'
import './slider.css'
import { useState } from 'react'
import { Link } from 'react-router'


export default function Slider({data}) {
  const [sliderIndex, setSliderIndex] = useState(0)

  const handelClick = (direction) => {
    if (direction === 'left') {
      setSliderIndex(sliderIndex - 1)
    } else {
      setSliderIndex(sliderIndex + 1)
    }
  }
  return (
    <div className="slider">
      <button disabled={sliderIndex === -data.length} onClick={() => handelClick('left')} className='bi bi-chevron-left arrow-left'></button>
      <div style={{ transform: `translate(${sliderIndex * -250}px)` }} className="slider-wrapper">
        {data.map((item) => (
          <Link to={`/products/${item.id}`} key={item.id} className="slider-item">
            <img src={item.image} alt={item.title} className="slider-img" />
            <h3 className="slider-title">{item.title}</h3>
            <Rating rating={item.rating} reviews={item.reviews} />
            <div className="slider-price">${item.price}</div>
          </Link>
        ))}
      </div>
      <button disabled={sliderIndex === 1} onClick={() => handelClick('right')} className='bi bi-chevron-right arrow-right'></button>
    </div>
  )
}
