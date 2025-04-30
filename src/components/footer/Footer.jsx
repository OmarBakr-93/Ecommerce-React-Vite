import './footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className="footer-top">
        <h3 className="footer-top-title">متواجدين دايما لمساعدتك</h3>
        <div className="footer-top-email">
          <span className='footer-top-text'>تواصل معنا عبر البريد الالكتروني</span>
          <span className="footer-top-email-adress">
            <i className='bi bi-envelope'></i>
            5Hl4U@example.com
          </span>
        </div>
      </div>
      <div className="footer-items-wrapper">
        <div className="footer-item">
          <h4 className='footer-item-title'>الألكترونيات</h4>
          <ul className="footer-item-list">
            <li className="footer-item-list-item">
              الكاميرات الألكترونية
            </li>
            <li className="footer-item-list-item">
              الأجهزة المنزلية
            </li>
            <li className="footer-item-list-item">
              الهواتف 
            </li>
            <li className="footer-item-list-item">
              سماعات الرأس
            </li>
            <li className="footer-item-list-item">
              التلفزيونات
            </li>
            <li className="footer-item-list-item">
              أجهزة التابلت
            </li>
          </ul>
        </div>
        <div className="footer-item">
          <h4 className='footer-item-title'>الجمال </h4>
          <ul className="footer-item-list">
            <li className="footer-item-list-item">
              العطور
            </li>
            <li className="footer-item-list-item">
              المكياج
            </li>
            <li className="footer-item-list-item">
              العناية بالشعر
            </li>
            <li className="footer-item-list-item">
              العناية بالبشرة
            </li>
            <li className="footer-item-list-item">
              الجسم و الاستحمام
            </li>
            <li className="footer-item-list-item">
              منتجات الرعاية الصحية
            </li>
          </ul>
        </div>
        <div className="footer-item">
          <h4 className='footer-item-title'>المطبخ و الأجهزة المنزلية</h4>
          <ul className="footer-item-list">
            <li className="footer-item-list-item">
              ديكورات منازل 
            </li>
            <li className="footer-item-list-item">
              الأثات
            </li>
            <li className="footer-item-list-item">
              ادوات المطبخ و الطعام
            </li>
            <li className="footer-item-list-item">
              مستلزمات الحدائق
            </li>
            <li className="footer-item-list-item">
              أجهزة صوت و فيديو
            </li>
            <li className="footer-item-list-item">
              مستلزمات الحمام
            </li>
          </ul>
        </div>
        <div className="footer-item">
          <h4 className='footer-item-title'>الازياء</h4>
          <ul className="footer-item-list">
            <li className="footer-item-list-item">
              ازياء الرجال
            </li>
            <li className="footer-item-list-item">
              ازياء النساء
            </li>
            <li className="footer-item-list-item">
              ازياء الاطفال
            </li>
            <li className="footer-item-list-item">
              نظارات
            </li>
            <li className="footer-item-list-item">
              اكسسوارات
            </li>
            <li className="footer-item-list-item">
              المجوهرات
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <i className="bi bi-c-circle"></i>
        Omar Bakr 2025. جميع الحقوق محفوظة
      </div>
    </footer>
  )
}
