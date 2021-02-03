import Head from 'next/head';
import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import ContactInfo from '@/components/ContactInfo';
import Expertise from '@/components/Home/Expertise';
import Competences from '@/components/Home/Competences';
import Background from '@/components/elements/Background';
import References from '@/components/Home/References';
import Footer from '@/components/Footer';

const Home = props => {
  const titleUrl = '/images/home.webp';
  const bgUrl = '/images/bg.webp';
  
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Peintepox | Décapage, sablage et peinture</title>
        <meta name="description" content="Peintepox, société implantée à Bagneux (92), est spécialisée en décapage, sablage, traitement anticorrosion, thermolaquage et peinture liquide." />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://peintepox.com/" />
        <meta property="og:title" content="Peintepox | Décapage, sablage, thermolaquage" />
        <meta property="og:description" content="Peintepox, société implantée à Bagneux (92), est spécialisée en décapage, sablage, traitement anticorrosion, thermolaquage et peinture liquide." />
        <meta property="og:image" content="/images/logoOG.webp" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://peintepox.com/" />
        <meta property="twitter:title" content="Peintepox | Décapage, sablage, thermolaquage" />
        <meta property="twitter:description" content="Peintepox, société implantée à Bagneux (92), est spécialisée en décapage, sablage, traitement anticorrosion, thermolaquage et peinture liquide." />
        <meta property="twitter:image" content="/images/logoOG.webp" />
        
      </Head>
      <Header active={1} isClicked={props.isClicked} handleClick={props.handleClick} />
      <main>
        <PageTitle url={titleUrl} isHome={true}>
          <h1>Peintepox</h1>
          <p>L’entreprise spécialisée dans le domaine du traitement de surface vous propose ses services de thermolaquage, peinture liquide, sablage, décapage et traitement anticorrosion.</p>
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