import iconHeader from "../Header/Icon/headerIcon.svg";

function Footer() {
  return (
    <div className="footer__wrapper">
      <section className="footer container">
        <div className="footer__item-main">
          <div className="footer__item-logo">
            <img src={iconHeader} alt="" />
            antools.
          </div>
          <h6 className="footer__item-info">Copyright 2021. Antools</h6>
          <p className="footer__item-text">
            Antool is a web collection of information on paid or free Design and
            Development tools
          </p>
        </div>
        <ul className="footer__list">
          <li className="footer__item">
            <h5 className="footer__item-title">Contact Us</h5>
            <div className="footer__item-list">
              <a className="footer__item-link" href="tel:621987463">
                +621987463
              </a>
              <a
                className="footer__item-link"
                target="_blank"
                href="https://www.google.ru/maps/search/M+%D1%80%D1%8F%D0%B4%D0%BE%D0%BC+%D1%81+Building+10,+%D0%91%D0%B5%D1%82%D0%B5%D1%81%D0%B4%D0%B0,+%D0%9C%D1%8D%D1%80%D0%B8%D0%BB%D0%B5%D0%BD%D0%B4,+%D0%A1%D0%A8%D0%90/@39.9754873,-76.2098114,9z?entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D"
              >
                M Building, No.10 A
              </a>
              <a
                className="footer__item-link"
                href="mailto:antools@awesome.com"
              >
                antools@awesome.com
              </a>
            </div>
          </li>
          <li className="footer__item">
            <h5 className="footer__item-title">Categories</h5>
            <div className="footer__item-list">
              <a className="footer__item-link" href="#">
                Design
              </a>
              <a className="footer__item-link" href="#">
                Development
              </a>
            </div>
          </li>

          <li className="footer__item">
            <h5 className="footer__item-title">Company Info</h5>
            <div className="footer__item-list">
              <a className="footer__item-link" href="/#">
                About Us
              </a>
              <a className="footer__item-link" href="#">
                Our Partners
              </a>
              <a className="footer__item-link" href="#">
                Blog
              </a>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Footer;
