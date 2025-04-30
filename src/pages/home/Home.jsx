import Banner from '../../components/banner/Banner'
import Category from '../../components/category/Category'
import SpecialOffers from '../../components/special-offers/SpecialOffer'
import Slider from '../../components/slider/Slider'
import HeadingTitle from '../../components/heading-title/HeadingTitle'
import Brand from '../../components/brands/Brand'
import { useEffect, useState } from 'react'

export default function Home() {

  const [products, setProducts] = useState([])

  //  fetch products
  async function GetProducts() {
    try {
      const response = await fetch('http://localhost:5000/products')
      const data = await response.json()
      setProducts(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    GetProducts()
  }, [])
  
  const laptop = products.filter((product) => product.isLaptop === true)
  const mobiles = products.filter((product) => product.isLaptop === false)
  return (
    <>
      <Banner />
      <Category />
      <SpecialOffers />
      <HeadingTitle title="Laptops" />
      <Slider data={laptop} />
      <HeadingTitle title="Mobiles" />
      <Slider data={mobiles} />
      <HeadingTitle title="تسوق حسب الماركة" />
      <Brand />
    </>
  )
}
