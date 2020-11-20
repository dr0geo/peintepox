import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import ContactInfo from '@/components/ContactInfo';
import Footer from '@/components/Footer';
import styled from 'styled-components';
import Services from '@/components/Services';

const StyledAnchor = styled.a`
  border-bottom: 1px solid white;
  color: white;
`;

const StyledSC = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: auto;
  max-width: 1300px;
  & a {
    border-bottom: none;
  }
  @media only screen and (max-width: 1350px) {
    max-width: 900px;
  }
`;

const Success = props => {
  const titleUrl = '/images/mailbox.webp';

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Peintepox - Message envoyé</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Header isClicked={props.isClicked} handleClick={props.handleClick} />
      <main>
        <PageTitle url={titleUrl}>
          <h1>Message envoyé</h1>
          <p>Votre message a bien été envoyé et nous faisons tout notre possible pour vous répondre au plus vite.<br/>Vous pouvez maintenant revenir à la <Link href="/"><StyledAnchor>page d'accueil</StyledAnchor></Link>.</p>
        </PageTitle>
        <h2>Retrouvez aussi...</h2>
        <StyledSC>
          <Services 
            bg="/images/card.webp" 
            name="Thermolaquage" 
            page="/thermolaquage" 
          />
          <Services 
            bg="/images/fluid.webp" 
            name="Peinture fluide" 
            page="/peinture-fluide"
          />
          <Services 
            bg="/images/sablage.webp" 
            name="Sablage" 
            page="/sablage"
          />
          <Services 
            bg="/images/chem-pickling.webp" 
            name="Décapage" 
            page="/decapage"
          />
          <Services 
            bg="/images/corrosion.webp" 
            name="Traitement anti-corrosion" 
            page="/traitement-anti-corrosion"
          />
        </StyledSC>
        <ContactInfo />
      </main>
      <Footer />
    </>
  );
}

export default Success;