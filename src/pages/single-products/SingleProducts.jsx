import { useEffect, useState } from 'react'
import { useParams } from "react-router"
import Rating from "../../components/rating/Rating"
import ProductDescription from "../special-offer-page/ProductDescription"
import './style.css'


export default function SingleProduct() {

  const [product, setProduct] = useState(null)
  
    //  fetch products
    async function getProductById(id) {
      try {
        const response = await fetch(`http://localhost:5000/products/${id}`)
        const data = await response.json()
        setProduct(data)
      } catch (error) {
        console.log(error)
      }
    }

    const { Id } = useParams()
    
    useEffect(() => {
      getProductById(Id)
    }, [Id])
  return (
    <div className="single-product">
      <div className="product-wrapper">
        <div className="product-img-wrapper">
        <img src={product && product.image} alt="" className="single-product-img" />
      </div>
      <div className="product-info">
                    <h1 className="product-title">{product && product.title}</h1>
                    <Rating rating={product && product.rating}  reviews={product && product.reviews}/>
                    <div className="product-price">
                      ${product && product.price}
                    </div>
                    <div className="product-add-to-cart">
                      <div>الكمية</div>
                      <input type="number" min={1} max={10}/>
                      <button className="add-to-cart-btn">اضافة للسلة</button>
                    </div>
                  </div>
    </div>
    <ProductDescription />
    </div>
  )
}
