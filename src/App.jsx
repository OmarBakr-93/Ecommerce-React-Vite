import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import Products from './pages/products/Products'
import SingleProduct from './pages/single-products/SingleProducts'
import Help from './pages/help/Help'
import Contact from './pages/contact/Contact'
import About from './pages/about/About'
import SpecialOfferPage from './pages/special-offer-page/SpecialOfferPage'


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/special-offer/:id" element={<SpecialOfferPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/help" element={<Help />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
