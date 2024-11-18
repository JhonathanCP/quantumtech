'use client';
import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import nodemailer from 'nodemailer';

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

    // Configurar el transporte de Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'admin@quantumtechpe.com', // Tu correo
        pass: 'mjil kawh gclz mjlm', // Contraseña generada en Google (App Password)
      },
    });

    // Opciones del correo
    const mailOptions = {
      from: 'admin@quantumtechpe.com',
      to: 'admin@quantumtechpe.com', // Destinatario (puede ser el mismo correo)
      subject: `Nuevo mensaje de: ${formData.user_name} - ${formData.subject}`,
      text: `Correo: ${formData.user_email}\n\n${formData.message}`,
    };

    try {
      // Enviar el correo
      await transporter.sendMail(mailOptions);
      toast.success('¡Mensaje enviado satisfactoriamente!');
      setFormData({
        user_name: '',
        user_email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error enviando correo:', error);
      toast.error('¡No se pudo enviar el mensaje!');
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
                      id="name"
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
                      id="email"
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
                      id="subject"
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
                      id="message"
                      name="message"
                      placeholder="Mensaje"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12">
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
