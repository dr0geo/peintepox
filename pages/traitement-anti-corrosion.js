import Head from 'next/head';
import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import ContactInfo from '@/components/ContactInfo';
import Footer from '@/components/Footer';

const Traitement = () => {
  const titleUrl = '/images/bg.jpeg';

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Peintepox : Traitement anti-corrosion</title>
      </Head>
      <Header />
      <main>
        <PageTitle url={titleUrl}>
          <h1>Traitement anti-corrosion</h1>
          <p>L’entreprise spécialisée dans le domaine du traitement de surface vous propose ses services de décapage, sablage, traitement anti-corrosion, thermolaquaque et peinture industrielle.</p>
        </PageTitle>
        <ContactInfo />
      </main>
      <Footer />
    </>
  );
}

export default Traitement;