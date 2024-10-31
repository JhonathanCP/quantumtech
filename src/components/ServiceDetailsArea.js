import Link from 'next/link';
import React from 'react';
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from 'react-icons/fa';

const ServiceDetailsArea = () => {
  return (
    <>
      {/* ===================== Service Details Area start ===================== */}
      <div className="service-area pd-top-120 pd-bottom-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12">
              <div className="td-sidebar service-sidebar">
                <div className="widget widget_catagory">
                  <h5 className="widget-title">
                    <FaArrowRight /> Lista de servicios
                  </h5>
                  <ul className="catagory-items">
                    <li>
                      <Link href="/service-details"> Desarrollo de aplicaciones</Link>
                    </li>
                    <li>
                      <Link href="/service-details"> Implementación de bases de datos</Link>
                    </li>
                    <li>
                      <Link href="/service-details"> Servicios web</Link>
                    </li>
                  </ul>
                </div>
                <div className="widget widget_author text-center">
                  <div className="thumb">
                    <img src="assets/img/about/9.png" alt="img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="blog-details-page-content">
                <div className="single-blog-inner mb-0">
                  <div className="thumb">
                    <img src="assets/img/service/7.png" alt="img" />
                  </div>
                  <div className="details">
                    <h4>
                    Tu principal aliado en la transformación digital
                    </h4>
                    <p>
                      Desarrollo de aplicaciones: Diseñamos y desarrollamos aplicaciones personalizadas 
                      que se adaptan perfectamente a las necesidades de tu negocio. Nuestro equipo crea 
                      soluciones intuitivas y de alto rendimiento, optimizadas para mejorar la 
                      productividad, la eficiencia y la experiencia del usuario. Desde aplicaciones móviles hasta 
                      plataformas empresariales, transformamos tus ideas en herramientas digitales que 
                      impulsan el crecimiento.
                    </p>
                    <p>
                      Implementación de bases de datos: Nos especializamos en la implementación de bases de datos robustas 
                      y seguras, fundamentales para la gestión eficiente de los datos en cualquier organización. Nuestro enfoque 
                      garantiza la integridad y disponibilidad de tu información, permitiendo que los datos fluyan de manera 
                      estructurada y accesible. Diseñamos bases de datos a medida, adaptadas a las demandas de cada proyecto, para apoyar 
                      una toma de decisiones rápida y fundamentada.
                    </p>
                    <p>
                      Servicios web: Desarrollamos e integramos servicios web escalables que permiten a tu empresa conectarse en tiempo real 
                      con usuarios y sistemas. A través de interfaces de programación de aplicaciones (APIs) y servicios web 
                      personalizados, facilitamos la interoperabilidad entre plataformas y aseguramos la eficiencia operativa de tu 
                      negocio en el entorno digital. Nos enfocamos en seguridad, rendimiento y flexibilidad para garantizar una 
                      experiencia online fluida y confiable.
                    </p>
                    <h4>Ponte en contacto para resolver tus dudas</h4>
                    <div
                      className="accordion accordion-inner accordion-icon-left mt-3 mb-4"
                      id="accordionExample"
                    >
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            ¿Cuanto tiempo toma completar un proyecto?
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                          La duración del proyecto variará según su complejidad y las necesidades 
                          específicas del usuario. Para proyectos pequeños, estimamos un plazo de varias semanas, mientras 
                          que los proyectos de mayor envergadura pueden requerir entre 4 y 5 meses para su implementación completa.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            ¿Cuanto cuesta trabajar con nosotros?
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                          El costo del servicio dependerá de la complejidad y los requerimientos específicos de cada proyecto. Para obtener una cotización precisa, no dude en ponerse en contacto con nosotros.
                          </div>
                        </div>
                      </div>
                    </div>
                    <h4>Lo mejor de nuestra compañía</h4>
                    <div className="row">
                      <div className="col-md-6">
                        <ul className="single-list-inner style-check style-check mb-3">
                          <li>
                            <FaCheckCircle /> Calidad en cada proyecto
                          </li>
                          <li>
                            <FaCheckCircle /> Flexibilidad y adaptación
                          </li>
                          <li>
                            <FaCheckCircle /> Resultados medibles y orientados al valor
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="single-list-inner style-check style-check mb-3">
                          <li>
                            <FaCheckCircle /> Equipo multidisciplinario
                          </li>
                          <li>
                            <FaCheckCircle /> Alto nivel de satisfacción del cliente
                          </li>
                          <li>
                            <FaCheckCircle /> Experiencia y conocimiento especializado
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===================== Service Details Area End ===================== */}
    </>
  );
};

export default ServiceDetailsArea;
