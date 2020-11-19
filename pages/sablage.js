import Head from 'next/head';
import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import Description from '@/components/Sablage/Description';
import ContactInfo from '@/components/ContactInfo';
import Footer from '@/components/Footer';

const Sablage = props => {
  const titleUrl = '/images/bg.jpeg';

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Peintepox - Sablage</title>
        <meta name="description" content="Découvrez les prestations de sablage sur métaux ou bois proposées par la société Peintépox, située en région parisienne." />
      </Head>
      <Header active={4} isClicked={props.isClicked} handleClick={props.handleClick} />
      <main>
        <PageTitle url={titleUrl}>
          <h1>Sablage</h1>
          <p>Le sablage est destiné à éliminer la peinture, les moisissures, les tâches et les salissures qui ternissent la surface d’un ouvrage ou d’une pièce.<br />Spécialiste du sablage de matériaux à base de métal ou de bois, Peintepox met son savoir-faire à votre disposition.</p>
        </PageTitle>
        <Description />
        <ContactInfo />
      </main>
      <Footer />
    </>
  );
}

export default Sablage;