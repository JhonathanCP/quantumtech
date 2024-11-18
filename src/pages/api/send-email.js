import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { user_name, user_email, subject, message } = req.body;

    // Configuración del transporte con Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "admin@quantumtechpe.com", // Tu correo
        pass: "mjil kawh gclz mjlm", // Contraseña generada en Google (App Password)
      },
    });

    const mailOptions = {
      from: "admin@quantumtechpe.com",
      to: "admin@quantumtechpe.com",
      subject: `Nuevo mensaje de: ${user_name} - ${subject}`,
      text: `Correo: ${user_email}\n\n${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res
        .status(200)
        .json({ success: true, message: "Correo enviado satisfactoriamente" });
    } catch (error) {
      console.error("Error enviando correo:", error);
      res
        .status(500)
        .json({ success: false, message: "Error enviando el correo" });
    }
  } else {
    res.status(405).json({ message: "Método no permitido" });
  }
}
