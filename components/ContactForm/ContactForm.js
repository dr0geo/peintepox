import styled from 'styled-components';
import Link from 'next/link';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  & > div {
    max-width: 500px;
    width: 100%;
  }
  & > div:first-of-type {
    background-image: url('/images/form.webp');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 5px 0px 0px 5px;
    height: auto;
    @media only screen and (max-width: 1050px) {
      display: none;
    }
  }
  @media only screen and (max-width: 1050px) {
    padding: 0 7%;
  }
`;

const Form = styled.form`
  align-items: center;
  background-color: #dbd7d6;
  border-radius: 0px 5px 5px 0px;
  display: flex;
  flex-direction: column;
  margin: 0px;
  max-width: 500px;
  padding: 20px 0;
  width: 100%;
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
  @media only screen and (max-width: 1050px) {
    border-radius: 5px;
    margin: 0px auto;
  }
`;

const Input = styled.input`
  background: white;
  border: 2px solid white;
  border-radius: 5px;
  margin: 10px 10px;
  padding: 10px 5px;
  transition: border 0.2s ease-in-out;
  max-width: 400px;
  width: 90%;
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
  max-width: 400px;
  min-height: 300px;
  padding: 10px 5px;
  resize: none;
  width: 90%;
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
  max-width: 1000px;
  padding-left: 0;
  padding-right: 0;
  text-align: justify;
  width: 100%;
  & > a {
    border-bottom: 1px solid black;
  }
  @media only screen and (max-width: 1050px) {
    max-width: 500px;
    width: 85%;
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
      <Wrapper>
        <div></div>
        <div>
          <Form action="https://api.mailslurp.com/forms" method="post" encType="multipart/form-data">
            <input id="ownEmail" name="_to" type="hidden" />
            <input name="_subject" type="hidden" value="Demande via le site Peintepox" />
            <input name="_redirectTo" type="hidden" value="https://peintepox.vercel.app/success" />
            <Input name="Prenom" type="text" placeholder="Prénom *" required />
            <Input name="Nom" type="text" placeholder="Nom *" required />
            <Input name="Email" type="email" placeholder="Email *" required />
            <Input name="Telephone" type="tel" placeholder="Téléphone" />
            <TextArea name="Message" minLength="10" placeholder="Ecrivez votre message ici... *" required></TextArea>
            <label htmlFor="attachment">Joindre des fichiers :</label>
            <Input id="attachment" multiple name="files" type="file" accept="image/*,.pdf" />
            <p>* tous les champs comprenant une astérisque doivent être remplis</p>
            <Button id="submit" type="submit" onClick={handleClick}>Envoyer la demande</Button>
          </Form>
        </div>
      </Wrapper>
      <Paragraph>SARL PEINTEPOX s'engage à ce que la collecte et le traitement de vos données, effectués à partir de son site <Link href="/"><a>peintepox-decapage-thermolaquage.fr</a></Link>, soient conformes au règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés. Pour connaître et exercer vos droits, notamment de retrait de votre consentement à l'utilisation des données collectées par ce formulaire, veuillez consulter notre <Link href="/mentions-legales"><a>politique de confidentialité</a></Link>.</Paragraph>
    </>
  );
}

export default ContactForm