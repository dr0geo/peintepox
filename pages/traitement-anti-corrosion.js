import Head from 'next/head';
import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import Description from '@/components/Traitement/Description';
import ContactInfo from '@/components/ContactInfo';
import Footer from '@/components/Footer';

const Traitement = props => {
  const titleUrl = '/images/bg.jpeg';

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Peintepox : Traitement anti-corrosion</title>
      </Head>
      <Header active={6} isClicked={props.isClicked} handleClick={props.handleClick} />
      <main>
        <PageTitle url={titleUrl}>
          <h1>Traitement anti-corrosion</h1>
          <p>Afin de résister aux contraintes dictées par l'environnement dans lequel sont amenées à évoluer vos pièces, un traitement anti-corrosion peut s'avérer indispensable.<br/>Peintepox vous permet de bénéficier de son expertise dans le domaine afin d'allonger la durée de vie de vos pièces métalliques.</p>
        </PageTitle>
        <Description />
        <ContactInfo />
      </main>
      <Footer />
    </>
  );
}

export default Traitement;