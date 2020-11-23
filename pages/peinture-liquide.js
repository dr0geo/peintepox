import Head from 'next/head';
import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import Description from '@/components/Peinture/Description';
import ContactInfo from '@/components/ContactInfo';
import Footer from '@/components/Footer';

const Peinture = props => {
  const titleUrl = '/images/liquid.webp';

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Peintepox - Peinture liquide</title>
        <meta name="description" content="Découvrez les prestations de peinture liquide proposées par la société Peintépox, située en région parisienne." />
      </Head>
      <Header active={6} isClicked={props.isClicked} handleClick={props.handleClick} />
      <main>
        <PageTitle url={titleUrl}>
          <h1>Peinture liquide</h1>
          <p>La peinture liquide est recommandée dans des cas bien particuliers : revêtement des pièces très imposantes, tolérances très précises.<br />Spécialistes de la peinture liquide depuis 1945, Peintepox vous propose des services de grande qualité dans le domaine.</p>
        </PageTitle>
        <Description />
        <ContactInfo />
      </main>
      <Footer />
    </>
  );
}

export default Peinture;