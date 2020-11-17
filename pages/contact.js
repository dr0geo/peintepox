import Head from 'next/head';
import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import ContactForm from '@/components/ContactForm/ContactForm';
import Footer from '@/components/Footer';

const Contact = () => {
  const titleUrl = '/images/bg.jpeg';

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Peintepox : Contact</title>
      </Head>
      <Header />
      <main>
        <PageTitle url={titleUrl}>
          <h1>Contactez-nous</h1>
          <p>Pour recevoir votre devis gratuit, merci de remplir le formulaire ci-dessous</p>
        </PageTitle>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default Contact;