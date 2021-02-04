import nodemailer from 'nodemailer';

const handleEmail = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp-relay.sendinblue.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  const query = {
    from: `${req.body.email}`,
    to: 'contact@geoffroy-vie.dev',
    subject: "Contact via le site Peintepox",
    html: `
      <p>Bonjour,</p>
      <br />
      <p>Vous avez reçu un message via le formulaire de contact du site web de Peintepox.</p>
      <h4>Nom du contact :</h4>
      <p>${req.body.firstName} ${req.body.lastName}</p>
      <h4>E-mail du contact : </h4>
      <p>${req.body.email}</p>
      <h4>Téléphone du contact (si renseigné) :</h4>
      <p>${req.body.phoneNumber}</p>
      <h4>Demande du contact : </h4>
      <p>${req.body.message}</p>
    `
  }

  try {
    await transporter.sendMail(query);
    res.status(200).end();
  } catch {
    res.status(400).end();
  }
}

export default handleEmail;
