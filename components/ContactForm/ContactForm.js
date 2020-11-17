import styled from 'styled-components';

const Form = styled.form`
  align-items: center;
  background-color: #e1e1e1;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 50px auto;
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
`;

const Button = styled.button`
  padding: 5px 15px;
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
        <Input name="Prenom" type="text" placeholder="Prénom *" required />
        <Input name="Nom" type="text" placeholder="Nom *" required />
        <Input name="Email" type="email" placeholder="Email *" required />
        <Input name="Telephone" type="tel" placeholder="Téléphone" />
        <TextArea name="Message" type="text" minLength="10" placeholder="Ecrivez votre message ici... *" required></TextArea>
        <label htmlFor="attachment">Joindre des fichiers :</label>
        <Input multiple id="attachment" name="files" type="file" accept="image/,.pdf" />
        <p>* tous les champs comprenant une astérisque doivent être remplis</p>
        <Button type="submit" onClick={handleClick}>Envoyer la demande</Button>
      </Form>
    </>
  );
}

export default ContactForm