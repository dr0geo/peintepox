import Head from 'next/head';
import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import Description from '@/components/Peinture/Description';
import ContactInfo from '@/components/ContactInfo';
import Footer from '@/components/Footer';

const Peinture = () => {
  const titleUrl = '/images/sablage.jpeg';

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Peintepox : Peinture fluide</title>
      </Head>
      <Header active={3} />
      <main>
        <PageTitle url={titleUrl}>
          <h1>Peinture fluide</h1>
          <p>La peinture fluide est recommandée pour le revêtement des pièces de grandes dimensions et de fortes épaisseurs, ou pour les pièces ne pouvant pas faire l’objet d’une polymérisation à 180°.<br />Spécialistes de la peinture fluide depuis 1945, Peintepox vous propose des services de grande qualité dans le domaine.</p>
        </PageTitle>
        <Description />
        <ContactInfo />
      </main>
      <Footer />
    </>
  );
}

export default Peinture;