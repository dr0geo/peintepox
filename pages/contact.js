import Head from 'next/head';
import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import ContactForm from '@/components/ContactForm/ContactForm';
import Footer from '@/components/Footer';

const Contact = props => {
  const titleUrl = '/images/contact.webp';

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Peintepox - Contact</title>
        <meta name="description" content="Contactez l'entreprise Peintepox afin de recevoir votre devis gratuit pour ses prestations de thermolaquage, peinture fluide, sablage, décapage et traitement anti-corrosion." />
      </Head>
      <Header active={7} isClicked={props.isClicked} handleClick={props.handleClick} />
      <main>
        <PageTitle url={titleUrl}>
          <h1>Contactez-nous</h1>
          <p>Pour recevoir votre devis gratuit, merci de remplir le formulaire ci-dessous, ou contactez-nous par téléphone au 09 70 35 10 37 du lundi au vendredi de 7h30 à 12h00, puis de 13h15 à 18h00.</p>
        </PageTitle>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default Contact;