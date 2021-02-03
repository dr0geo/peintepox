import Head from 'next/head';
import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import Description from '@/components/Traitement/Description';
import ContactInfo from '@/components/ContactInfo';
import Footer from '@/components/Footer';

const Traitement = props => {
  const titleUrl = '/images/corrosion.webp';

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Peintepox - Traitement anticorrosion</title>
        <meta name="description" content="Découvrez les prestations de traitement anticorrosion pour vos matériaux métalliques proposées par la société Peintépox, située à Bagneux (92)." />
      </Head>
      <Header active={4} isClicked={props.isClicked} handleClick={props.handleClick} />
      <main>
        <PageTitle url={titleUrl}>
          <h1>Traitement anticorrosion</h1>
          <p>Afin de résister aux contraintes dictées par l'environnement dans lequel sont amenées à évoluer vos pièces, un traitement anticorrosion peut s'avérer indispensable.<br/>Peintepox vous permet de bénéficier de son expertise dans le domaine afin d'allonger la durée de vie de vos pièces métalliques.</p>
        </PageTitle>
        <Description />
        <ContactInfo />
      </main>
      <Footer />
    </>
  );
}

export default Traitement;