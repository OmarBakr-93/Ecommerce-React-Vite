import './brand.css'
import { brands } from '../../data/brands.js'

export default function Brand() {
  return (
    <div className='brand-wrapper'>
      {brands.map((brand) => (
        <div className="brand-item" key={brand.id}>
          <img src={brand.image} alt=""className="brand-img" />
        </div>
      ))}
    </div>
  )
}
