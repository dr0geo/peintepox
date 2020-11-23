import Head from 'next/head';
import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import Description from '@/components/Decapage/Description';
import ContactInfo from '@/components/ContactInfo';
import Footer from '@/components/Footer';


const Decapage = props => {
  const titleUrl = '/images/chem-pickling.webp';

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Peintepox - Décapage</title>
        <meta name="description" content="Découvrez les prestations de décapage des métaux proposées par la société Peintépox, située en région parisienne." />
      </Head>
      <Header active={2} isClicked={props.isClicked} handleClick={props.handleClick} />
      <main>
        <PageTitle url={titleUrl}>
          <h1>Décapage</h1>
          <p>Grâce à sa forte expérience dans le domaine, Peintepox vous propose de réaliser le décapage chimique de vos pièces métalliques. Il s'agit, entre autres, de supprimer les traces de vernis, les graffitis et les peintures superflues à la surface de vos pièces.</p>
        </PageTitle>
        <Description />
        <ContactInfo />
      </main>
      <Footer />
    </>
  );
}

export default Decapage;