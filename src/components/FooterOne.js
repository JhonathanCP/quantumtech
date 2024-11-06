import Link from 'next/link';
import React from 'react';
import {
  FaArrowRight,
  FaCalendarAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const FooterOne = () => {
  return (
    <>
      {/* ================== Footer One Start ==================*/}
      <footer className="footer-area bg-black bg-cover">
        <div className="footer-subscribe">
          <div className="container">
            <div
              className="footer-subscribe-inner bg-cover"
              style={{ backgroundImage: 'url("./assets/img/bg/6.png")' }}
            >
              <div className="row">
                <div className="col-lg-6">
                  <h2 className="mb-lg-0 mb-3">Suscribete para más noticias</h2>
                </div>
                <div className="col-lg-6 align-self-center text-lg-end">
                  <input type="text" placeholder="Ingresa tu dirección de correo" />
                  <Link className="btn btn-black border-radius-0" href="#">
                    Submit now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_about">
                <div className="thumb">
                  <img src="assets/img/logo2.png" alt="img" />
                </div>
                <div className="details">
                  <p>
                    Medios de comunicación
                  </p>
                  <p className="mt-3">
                    <FaPhoneAlt /> +51 955 517 903
                  </p>
                  <p className="mt-2">
                    <FaEnvelope /> admin@quantumtechpe.com
                  </p>
                  <ul className="social-media">
                    <li>
                      <Link href="#">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaYoutube />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Nuestros serivicios</h4>
                <ul>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Desarrollo de aplicaciones
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Bases de datos
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Servicios web
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Reportería
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <p>© Quantumtech Solutions 2024 | Todos los derechos reservados</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* ================== Footer One  end ==================*/}
    </>
  );
};

export default FooterOne;
