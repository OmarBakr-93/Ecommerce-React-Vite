import './rating.css'

export default function Rating({rating, reviews}) {
  return (
    <div className='rating-wrapper'>
      <b className="rating">
        {rating} <i className="bi bi-star-fill"></i>
      </b>
      <span className="reviews">{reviews} التقيمات</span>
    </div>
  )
}
