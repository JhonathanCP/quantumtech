import React from "react";

const WorkProcessOne = () => {
  return (
    <>
      {/*==================== Work Process One start ====================*/}
      <div className='work-process-area pd-top-120 pd-bottom-90'>
        <div className='container'>
          <div className='section-title text-center'>
            <h6 className='sub-title'>Nuestro simple proceso</h6>
            <h2 className='title'>
              Pasos <span>claves</span> en nuestro proceso de creación
            </h2>
          </div>
          <div className='row'>
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                <div className='thumb mb-3'>
                  <img src='assets/img/icon/9.svg' alt='img' />
                </div>
                <div className='details'>
                  <p className='process-count'>Paso 01</p>
                  <h5 className='mb-3'>Evaluación de la problemática</h5>
                  <p className='content'>
                  Analizamos en profundidad la situación actual del negocio y proponemos soluciones estratégicas y efectivas.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                <div className='thumb mb-3'>
                  <img src='assets/img/icon/10.svg' alt='img' />
                </div>
                <div className='details'>
                  <p className='process-count'>Paso 02</p>
                  <h5 className='mb-3'>Investigación de tecnologías y modelamiento</h5>
                  <p className='content'>
                  Investigamos y seleccionamos las tecnologías más adecuadas para las soluciones planteadas, modelando una versión preliminar optimizada.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                <div className='thumb mb-3'>
                  <img src='assets/img/icon/11.svg' alt='img' />
                </div>
                <div className='details'>
                  <p className='process-count'>Paso 03</p>
                  <h5 className='mb-3'>Desarrollo</h5>
                  <p className='content'>
                  Desarrollamos una herramienta eficiente que aborda de manera efectiva la problemática identificada.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                <div className='thumb mb-3'>
                  <img src='assets/img/icon/12.svg' alt='img' />
                </div>
                <div className='details'>
                  <p className='process-count'>Paso 04</p>
                  <h5 className='mb-3'>Implementación</h5>
                  <p className='content'>
                  Implementamos la solución en el negocio, ofreciendo soporte continuo durante el proceso de despliegue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==================== Work Process One end ====================*/}
    </>
  );
};

export default WorkProcessOne;
