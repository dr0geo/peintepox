import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Button from '@/elements/Button';

const Wrapper = styled.div`
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
  background-color: #e1e1e1;
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
    font-family: 'Tajawal', sans-serif;
    font-size: 0.9rem;
  }
  &:hover {
    background-color: #F2F7F6;
  }
  &:focus {
    border: 2px solid teal;
  }
`;

const Paragraph = styled.p`
  font-size: 0.7rem;
  line-height: 1rem;
  margin: 10px auto 50px auto;
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

const ContactForm = () => {
  const router = useRouter();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contactMessage = {
      firstName,
      lastName,
      email,
      phoneNumber,
      message
    }

    try {
      await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contactMessage)
      });
      router.push('/success');
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <section>
      <h2>Nous nous engageons à vous répondre dans les plus brefs délais</h2>
      <Wrapper>
        <div></div>
        <div>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text" 
              placeholder="Prénom *" 
              onChange={e => setFirstName(e.target.value)}
              required
            />
            <Input
              type="text" 
              placeholder="Nom *"
              onChange={e => setLastName(e.target.value)}
              required
            />
            <Input
              type="email" 
              placeholder="Email *"
              onChange={e => setEmail(e.target.value)}
              required
            />
            <Input
              type="tel" 
              placeholder="Téléphone"
              onChange={e => setPhoneNumber(e.target.value)}
            />
            <TextArea
              minLength="10" 
              placeholder="Ecrivez votre message ici... *"
              onChange={e => setMessage(e.target.value)}
              required
            >
            </TextArea>
            <p>* tous les champs comprenant une astérisque doivent être remplis</p>
            <Button type="submit">Envoyer la demande</Button>
          </Form>
        </div>
      </Wrapper>
      <Paragraph>SARL PEINTEPOX s'engage à ce que la collecte et le traitement de vos données, effectués à partir de son site <Link href="/"><a>peintepox.com</a></Link>, soient conformes au règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés. Pour connaître et exercer vos droits, notamment de retrait de votre consentement à l'utilisation des données collectées par ce formulaire, veuillez consulter notre <Link href="/mentions-legales"><a>politique de confidentialité</a></Link>.</Paragraph>
    </section>
  );
}

export default ContactForm