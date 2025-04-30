
export default function TopHeader( {setToggle } ) {
  return (
    <div className='top-header'>
        <div onClick={() => setToggle(true)} className="top-header-menu">
          <i className="bi bi-list"></i>
        </div>
        <div className="top-header-logo">
          <i className="bi bi-basket2"></i>
          الحراق
        </div>
        <div className="top-header-text">أهلا بك في الحراق</div>
        <div className="top-header-phone">
          <i className="bi bi-telephone-fill">+966 123456789</i>
        </div>
      </div>
  )
}
