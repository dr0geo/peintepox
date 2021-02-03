import Head from 'next/head';
import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import Description from '@/components/Legal/Description';
import ContactInfo from '@/components/ContactInfo';
import Footer from '@/components/Footer';

const Legal = props => {
  const titleUrl = '/images/mentions.webp';

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Peintepox | Mentions Légales</title>
        <meta name="description" content="Mentions légales de l'entreprise Peintepox spécialisée en décapage, sablage, traitement anticorrosion, thermolaquage et peinture liquide, située à Bagneux (92)." />
      </Head>
      <Header isClicked={props.isClicked} handleClick={props.handleClick} />
      <PageTitle url={titleUrl}>
        <h1>Mentions Légales</h1>
      </PageTitle>
      <Description />
      <ContactInfo />
      <Footer />
    </>
  );
}

export default Legal;