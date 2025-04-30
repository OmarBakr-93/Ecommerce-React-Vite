import { categories } from '../../data/category.js'
import './category.css'

export default function Category() {
  return (
    <div className="categories">
      {categories.map((category) => (
        <div className="category-item" key={category.id}>
          <img src={category.image} alt={category.title} className='category-img'/>
          <b className="category-title">{category.title}</b>
        </div>
      ))}
    </div>
  )
}
