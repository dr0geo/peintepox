import styled from 'styled-components';
import Link from 'next/link';

const Form = styled.form`
  align-items: center;
  background-color: #e1e1e1;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 50px auto 0px auto;
  max-width: 500px;
  padding: 20px 0;
  & > p {
    font-size: 0.85rem;
    font-weight: 300;
  }
  & > label {
    align-self: flex-start;
    font-size: 0.85rem;
    margin-left: 50px;
    margin-top: 10px;
  }
`;

const Input = styled.input`
  background: white;
  border: 2px solid white;
  border-radius: 5px;
  margin: 10px 0;
  padding: 10px 5px;
  transition: border 0.2s ease-in-out;
  width: 400px;
  &:hover {
    background-color: #F2F7F6;
  }
  &:focus {
    border: 2px solid teal;
  }
`;

const TextArea = styled.textarea`
  border: 2px solid transparent;
  border-radius: 5px;
  margin: 10px 0;
  min-height: 300px;
  padding: 10px 5px;
  resize: none;
  width: 400px;
  &::placeholder {
    font-family: 'Roboto', sans-serif;
    font-size: 0.9rem;
  }
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 5px 15px;
`;

const Paragraph = styled.p`
  font-size: 0.7rem;
  line-height: 1rem;
  margin: 0 auto 50px auto;
  text-align: justify;
  width: 500px;
  & > a {
    border-bottom: 1px solid black;
  }
`;

const handleClick = () => {
  const name = 'geoffroy.vie';
  const domain = 'gmail.com';
  document.getElementById('ownEmail').setAttribute('value', `${name}@${domain}`);
}

const ContactForm = () => {
  return (
    <>
      <h2>Nous nous engageons à vous répondre dans les plus brefs délais</h2>
      <Form action="https://api.mailslurp.com/forms" method="post" encType="multipart/form-data">
        <input id="ownEmail" name="_to" type="hidden" />
        <input name="_subject" type="hidden" value="Demande via le site Peintepox" />
        <input name="_successMessage" type="hidden" value="Votre formulaire a bien été envoyé" />
        <Input name="Prenom" type="text" placeholder="Prénom *" required />
        <Input name="Nom" type="text" placeholder="Nom *" required />
        <Input name="Email" type="email" placeholder="Email *" required />
        <Input name="Telephone" type="tel" placeholder="Téléphone" />
        <TextArea name="Message" type="text" minLength="10" placeholder="Ecrivez votre message ici... *" required></TextArea>
        <label htmlFor="attachment">Joindre des fichiers :</label>
        <Input multiple id="attachment" name="files" type="file" accept="image/*,.pdf" />
        <p>* tous les champs comprenant une astérisque doivent être remplis</p>
        <Button id="submit" type="submit" onClick={handleClick}>Envoyer la demande</Button>
      </Form>
      <Paragraph>SARL PEINTEPOX s'engage à ce que la collecte et le traitement de vos données, effectués à partir de notre site peintepox-decapage-thermolaquage.fr, soient conformes au règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés. Pour connaître et exercer vos droits, notamment de retrait de votre consentement à l'utilisation des données collectées par ce formulaire, veuillez consulter notre <Link href="/mentions-legales"><a>politique de confidentialité</a></Link>.</Paragraph>
    </>
  );
}

export default ContactForm