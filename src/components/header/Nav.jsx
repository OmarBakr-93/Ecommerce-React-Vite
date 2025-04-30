import { Link } from "react-router"


export default function Nav({ toggle, setToggle }) {

  return (
    <nav style={{ right: toggle && '0' }} className="navbar">
        <div  className="navbar-close-icon">
          <i onClick={() => setToggle(false)} className="bi bi-x-lg"></i>
        </div>
        <ul className="navbar-links">
          <Link to={"/"} onClick={() => setToggle(false)} className="navbar-link">الرئيسية</Link>
          <Link to={"/products"} onClick={() => setToggle(false)} className="navbar-link">منتجات</Link>
          <Link to={"/offers"} onClick={() => setToggle(false)} className="navbar-link">عروض</Link>
          <Link to={"/about"} onClick={() => setToggle(false)} className="navbar-link">من نحن</Link>
          <Link to={"/contact"} onClick={() => setToggle(false)} className="navbar-link">اتصل بنا</Link>
          <Link to={"/help"} onClick={() => setToggle(false)} className="navbar-link">المساعدة</Link>
        </ul>
      </nav>
  )
}
