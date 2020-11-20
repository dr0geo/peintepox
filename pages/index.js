import Head from 'next/head';
import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import ContactInfo from '@/components/ContactInfo';
import Expertise from '@/components/Home/Expertise';
import Competences from '@/components/Home/Competences';
import Background from '@/components/Background';
import References from '@/components/Home/References';
import Footer from '@/components/Footer';

const Home = props => {
  const titleUrl = '/images/home.webp';
  const bgUrl = '/images/bg.webp';
  
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Peintepox - Thermolaquage, peinture fluide, sablage, décapage et traitement anti-corrosion</title>
        <meta name="description" content="Bienvenue sur le site de Peintepox, société implantée en région parisienne et spécialisée en thermolaquage, peinture fluide, sablage, décapage et traitement anti-corrosion." />
      </Head>
      <Header active={1} isClicked={props.isClicked} handleClick={props.handleClick} />
      <main>
        <PageTitle url={titleUrl} isHome={true}>
          <h1>Peintepox</h1>
          <p>L’entreprise spécialisée dans le domaine du traitement de surface vous propose ses services de thermolaquage, peinture fluide, sablage, décapage et traitement anti-corrosion.</p>
        </PageTitle>
        <ContactInfo isHome={true} />
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