import Head from 'next/head';
import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import ContactInfo from '@/components/ContactInfo';
import Expertise from '@/components/Home/Expertise';
import Competences from '@/components/Home/Competences';
import Background from '@/components/Background';
import References from '@/components/Home/References';
import Footer from '@/components/Footer';

const Home = () => {
  const titleUrl = '/images/home.jpeg';
  const bgUrl = '/images/bg.jpeg';
  
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Peintepox : Accueil</title>
      </Head>
      <Header />
      <main>
        <PageTitle url={titleUrl}>
          <h1>Peinture thermolaquage, sablage, décapage, traitement anti-corrosion</h1>
          <p>L’entreprise spécialisée dans le domaine du traitement de surface vous propose ses services de décapage, sablage, traitement anti-corrosion, thermolaquaque et peinture industrielle.</p>
        </PageTitle>
        <ContactInfo />
        <Expertise />
        <Competences />
        <Background url={bgUrl} />
        <References />
        <ContactInfo />
      </main>
      <Footer />
    </>
  );
}

export default Home;