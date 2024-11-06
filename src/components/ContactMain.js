'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';
const ContactMain = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Please See Documentation for more information
    emailjs
      .sendForm(
        '**********', //YOUR_SERVICE_ID
        '**********', //YOUR_TEMPLATE_ID
        form.current,
        '**********', //YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text === 'OK') {
            toast.success('¡Mensaje enviado satisfactoriamente!');
            form.current[0].value = '';
            form.current[1].value = '';
            form.current[2].value = '';
            form.current[3].value = '';
          }
        },
        (error) => {
          if (error.text !== 'OK') {
            toast.success('¡Mensaje no enviado!');
          }
        },
      );
  };
  return (
    <>
      {/* ================= Contact Main start =================*/}
      <Toaster position="bottom-center" reverseOrder={false} />
      <>
        {/* contact area start */}
        <div className="contact-area pd-top-120 pd-bottom-120">
          <div className="container">
            <div className="contact-page-inner bg-gray">
              <div className="section-title mb-4 pb-2">
                <h2 className="title">Contactanos directamente </h2>
                <p className="content mb-0">
                Déjanos tus dudas y sugerencias en nuestra bandeja de entrada, y nos pondremos 
                en contacto contigo lo antes posible.
                </p>
              </div>
              <form ref={form} onSubmit={sendEmail}>
                <div className="row">
                  <div className="col-md-12">
                    <div className="single-input-inner">
                      <input
                        id="name"
                        name="user_name"
                        type="text"
                        placeholder="Ingresa tu noombre."
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="single-input-inner">
                      <input
                        id="email"
                        name="user_email"
                        type="email"
                        placeholder="Ingresa tu email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="single-input-inner">
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="Ingresa el asunto"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="single-input-inner">
                      <textarea
                        name="message"
                        id="massage"
                        cols="1"
                        rows="5"
                        placeholder="Ingresa tu mensaje"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      className="btn btn-base border-radius-5"
                    >
                      Enviar mensaje
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* contact area end */}
        {/* contact list start */}
        <div className="contact-page-list">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="media single-contact-list">
                  <div className="media-left">
                    <img src="assets/img/icon/13.svg" alt="img" />
                  </div>
                  <div className="media-body">
                    <h5>Contactanos</h5>
                    <h6>+51955517903</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="media single-contact-list">
                  <div className="media-left">
                    <img src="assets/img/icon/14.svg" alt="img" />
                  </div>
                  <div className="media-body">
                    <h5>Nuestro email</h5>
                    <h6>admin@quantumtechpe.com</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="media single-contact-list">
                  <div className="media-left">
                    <img src="assets/img/icon/15.svg" alt="img" />
                  </div>
                  <div className="media-body">
                    <h5>Ubicación</h5>
                    <h6>Lima, Perú</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contact list start */}
        {/* map start */}
        <div className="contact-g-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d97511.04316711595!2d-77.0428!3d-12.0464!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2spe!4v1589109092857!5m2!1sen!2spe"
            title="new title"
          />
        </div>
        {/* map end */}
      </>

      {/* ================= Contact Main End =================*/}
    </>
  );
};

export default ContactMain;
