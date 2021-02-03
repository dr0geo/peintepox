import Head from 'next/head';
import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import Description from '@/components/Thermolaquage/Description';
import ContactInfo from '@/components/ContactInfo';
import Footer from '@/components/Footer';

const Thermolaquage = props => {
  const titleUrl = '/images/card.webp';

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Peintepox - Thermolaquage</title>
        <meta name="description" content="Découvrez les prestations de thermolaquage proposées par la société Peintépox, située à Bagneux (92)." />
      </Head>
      <Header active={5} isClicked={props.isClicked} handleClick={props.handleClick} />
      <main>
        <PageTitle url={titleUrl}>
          <h1>Thermolaquage</h1>
          <p>L’entreprise Peintepox possède une solide expertise dans l’application de peinture en poudre thermodurcissable appelée thermolaquage.<br />Utiliser le thermolaquage après préparation de vos pièces améliore leur résistance, la tenue et l'uniformité de leurs couleurs, et vous permet de bénéficier d'un large choix de teintes, textures et effets.</p>
        </PageTitle>
        <Description />
        <ContactInfo />
      </main>
      <Footer />
    </>
  );
}

export default Thermolaquage;