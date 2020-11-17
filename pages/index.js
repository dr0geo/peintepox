import Head from 'next/head';
import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';

const Home = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Peintepox : Accueil</title>
      </Head>
      <Header />
      <main>
        <PageTitle>
          <h1>Peinture thermolaquage, sablage, traitement anti-corrosion, décapage</h1>
          <p>L’entreprise spécialisée dans le domaine du traitement de surface vous propose ses services de décapage, sablage, traitement anti-corrosion, thermolaquaque et peinture industrielle.</p>
        </PageTitle>
      </main>
      
    </>
  );
}

export default Home;