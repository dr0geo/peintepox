import Head from 'next/head';
import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import ContactInfo from '@/components/ContactInfo';
import Expertise from '@/components/Home/Expertise';
import Competences from '@/components/Home/Competences';
import Background from '@/components/Home/Background';
import References from '@/components/Home/References';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Peintepox : Accueil</title>
      </Head>
      <Header />
      <main>
        <PageTitle url="/images/home.jpeg">
          <h1>Peinture thermolaquage, sablage, traitement anti-corrosion, décapage</h1>
          <p>L’entreprise spécialisée dans le domaine du traitement de surface vous propose ses services de décapage, sablage, traitement anti-corrosion, thermolaquaque et peinture industrielle.</p>
        </PageTitle>
        <ContactInfo />
        <Expertise />
        <Competences />
        <Background />
        <References />
        <ContactInfo />
      </main>
      <Footer />
    </>
  );
}

export default Home;