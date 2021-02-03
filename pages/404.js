import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
import { WhiteDiv } from '@/elements/Divisions';
import { ServicesContainer } from '@/elements/FlexDiv';
import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import ContactInfo from '@/components/ContactInfo';
import Footer from '@/components/Footer';
import Services from '@/components/Services';

const SpecialContainer = styled(ServicesContainer)`
  @media only screen and (max-width: 1350px) {
    max-width: 900px;
  }
`;

const StyledAnchor = styled.a`
  border-bottom: 1px solid white;
  color: white;
`;

const Error404 = props => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Peintepox - Erreur 404</title>
        <meta name="robots" content="noindex" />
        <meta name="description" content="La page que vous avez demandé est introuvable." />
      </Head>
      <Header isClicked={props.isClicked} handleClick={props.handleClick} />
      <main>
        <PageTitle url="/images/error404.webp">
          <h1>Erreur 404</h1>
          <p>Il semble que la page que vous cherchez n'existe pas. Vous pouvez revenir à <Link href="/" passHref><StyledAnchor>l'accueil du site</StyledAnchor></Link> ou utiliser l'un des liens ci-dessous pour vous rediriger.</p>
        </PageTitle>
        <WhiteDiv>
          <h2>Retrouvez aussi...</h2>
          <SpecialContainer>
            <Services 
              bg="/images/decapage.webp" 
              name="Décapage" 
              page="/decapage"
            />
            <Services 
              bg="/images/sablage.webp" 
              name="Sablage" 
              page="/sablage"
            />
            <Services 
              bg="/images/corrosion.webp" 
              name="Traitement anticorrosion" 
              page="/traitement-anticorrosion"
            />
            <Services 
              bg="/images/card.webp" 
              name="Thermolaquage" 
              page="/thermolaquage" 
            />
            <Services 
              bg="/images/liquid.webp" 
              name="Peinture liquide" 
              page="/peinture-liquide"
            />
          </SpecialContainer>
        </WhiteDiv>
        <ContactInfo />
      </main>
      
      <Footer />
    </>
  );
}

export default Error404;