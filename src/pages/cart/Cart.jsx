import './cart.css'


const cartItems = [
  {
    id: 1,
    quantity: 3,
    price : 100,
    title: "HP BELANCA Core i2",
    image: "/images/products/laptops/l1.jpg",
  },
  {
    id: 2,
    quantity: 5,
    price : 150,
    title: "laptop asus gaming 515-5",
    image: "/images/products/laptops/l2.jpg",
  },
  {
    id: 3,
    quantity: 4,
    price : 200,
    title: "Hawaii laptop Macbook Air",
    image: "/images/products/laptops/l3.jpg",
  },
]

export default function Cart() {
  return (
    <div className="cart">
      <h1 className="cart-title">سلة التسوق</h1>
      <div className="cart-wrapper">
        <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="cart-item-img-wrapper">
            <img src={item.image} alt="" className="cart-item-img" />
            </div>
            <div className="cart-item-info">
              <div className="cart-item-title">{item.title}</div>
              <div className="cart-item-quantity">الكمية : <span>{item.quantity}</span></div>
              <div className="cart-item-price">السعر :$<span>{item.price*item.quantity}</span></div>
            </div>
            <i className="bi bi-trash cart-item-delete"></i>
          </div>
        ))}
        </div>
      <div className="cart-summary">
        <div className="cart-summary-text">
          <i className="bi bi-check-circle-fill cart-summary-close"></i>
          جزء من طلبك مؤهل للشحن المجاني. قم بتحديد هذا الخيار عند الدفع للتفاصيل 
        </div>
        <div className="cart-summary-total">
          المجموع : <span>{cartItems.reduce((acc, current) => acc + current.price*current.quantity, 0)}$</span>
        </div>
        <button className="cart-summary-btn">استكمال الطلب</button>
      </div>
    </div>
    </div>
  )
}
