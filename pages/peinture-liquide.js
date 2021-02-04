import Head from 'next/head';
import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import Description from '@/components/Peinture/Description';
import ContactInfo from '@/components/ContactInfo';
import Footer from '@/components/Footer';

const Peinture = props => {
  const titleUrl = '/images/peinture-liquide.webp';

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Peintepox | Peinture liquide</title>
        <meta name="description" content="Découvrez les prestations de peinture liquide proposées par la société Peintépox, située à Bagneux (92)." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://peintepox.com/peinture-liquide" />
        <meta property="og:title" content="Peintepox | Peinture liquide" />
        <meta property="og:description" content="Découvrez les prestations de peinture liquide proposées par la société Peintépox, située à Bagneux (92)." />
        <meta property="og:image" content="/images/logoOG.webp" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://peintepox.com/peinture-liquide" />
        <meta property="twitter:title" content="Peintepox | Peinture liquide" />
        <meta property="twitter:description" content="Découvrez les prestations de peinture liquide proposées par la société Peintépox, située à Bagneux (92)." />
        <meta property="twitter:image" content="/images/logoOG.webp" />

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