import Head from 'next/head';
import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import Description from '@/components/Thermolaquage/Description';
import ContactInfo from '@/components/ContactInfo';
import Footer from '@/components/Footer';

const Thermolaquage = () => {
  const titleUrl = '/images/card.jpeg';

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Peintepox : Thermolaquage</title>
      </Head>
      <Header />
      <main>
        <PageTitle url={titleUrl}>
          <h1>Peinture thermolaquage</h1>
          <p>L’entreprise spécialisée dans le domaine du traitement de surface vous propose ses services de décapage, sablage, traitement anti-corrosion, thermolaquaque et peinture industrielle.</p>
        </PageTitle>
        <Description />
        <ContactInfo />
      </main>
      <Footer />
    </>
  );
}

export default Thermolaquage;