'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';

const ContactMain = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/send-email', formData);
      if (response.data.success) {
        toast.success('¡Mensaje enviado satisfactoriamente!', {position: 'top-center'});
        setFormData({
          user_name: '',
          user_email: '',
          subject: '',
          message: '',
        });
      }
    } catch (error) {
      toast.error('¡No se pudo enviar el mensaje!');
      console.error(error);
    }
  };

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="contact-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="contact-page-inner bg-gray">
            <div className="section-title mb-4 pb-2">
              <h2 className="title">Mándanos un mensaje</h2>
              <p className="content mb-0">
                Déjanos tus dudas y sugerencias en nuestra bandeja de entrada, y nos pondremos
                en contacto contigo lo antes posible.
              </p>
            </div>
            <form onSubmit={sendEmail}>
              <div className="row">
                <div className="col-md-12">
                  <div className="single-input-inner">
                    <input
                      name="user_name"
                      type="text"
                      placeholder="Ingresa tu nombre"
                      value={formData.user_name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="single-input-inner">
                    <input
                      name="user_email"
                      type="email"
                      placeholder="Ingresa tu email"
                      value={formData.user_email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="single-input-inner">
                    <input
                      name="subject"
                      type="text"
                      placeholder="Asunto"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="single-input-inner">
                    <textarea
                      name="message"
                      placeholder="Escribe tu mensaje"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">
                    Enviar Mensaje
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMain;
