import Head from 'next/head';
import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import Description from '@/components/Decapage/Description';
import ContactInfo from '@/components/ContactInfo';
import Footer from '@/components/Footer';


const Decapage = props => {
  const titleUrl = '/images/decapage.webp';

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Peintepox | Décapage</title>
        <meta name="description" content="Découvrez les prestations de décapage des métaux proposées par la société Peintépox, située à Bagneux (92)." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://peintepox.com/decapage" />
        <meta property="og:title" content="Peintepox | Décapage" />
        <meta property="og:description" content="Découvrez les prestations de décapage des métaux proposées par la société Peintépox, située à Bagneux (92)." />
        <meta property="og:image" content="/images/logoOG.webp" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://peintepox.com/decapage" />
        <meta property="twitter:title" content="Peintepox | Décapage" />
        <meta property="twitter:description" content="Découvrez les prestations de décapage des métaux proposées par la société Peintépox, située à Bagneux (92)." />
        <meta property="twitter:image" content="/images/logoOG.webp" />

      </Head>
      <Header active={2} isClicked={props.isClicked} handleClick={props.handleClick} />
      <main>
        <PageTitle url={titleUrl}>
          <h1>Décapage</h1>
          <p>Grâce à sa forte expérience dans le domaine, Peintepox vous propose de réaliser le décapage chimique par immersion de vos pièces métalliques. Ce procédé permet de retirer les peintures, vernis et poudres époxy.</p>
        </PageTitle>
        <Description />
        <ContactInfo />
      </main>
      <Footer />
    </>
  );
}

export default Decapage;