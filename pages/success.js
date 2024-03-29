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

const Success = props => {
  const titleUrl = '/images/mailbox.webp';

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Peintepox | Message envoyé</title>
        <meta name="robots" content="noindex" />
        <meta name="description" content="Message envoyé, nous faisons tout notre possible pour vous répondre au plus vite." />
      </Head>
      <Header isClicked={props.isClicked} handleClick={props.handleClick} />
      <main>
        <PageTitle url={titleUrl}>
          <h1>Message envoyé</h1>
          <p>Votre message a bien été envoyé et nous faisons tout notre possible pour vous répondre au plus vite.<br/>Vous pouvez maintenant revenir à la <Link href="/" passHref><StyledAnchor>page d'accueil</StyledAnchor></Link>.</p>
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
              bg="/images/anticorrosion.webp" 
              name="Traitement anticorrosion" 
              page="/traitement-anticorrosion"
            />
            <Services 
              bg="/images/thermolaquage.webp" 
              name="Thermolaquage" 
              page="/thermolaquage" 
            />
            <Services 
              bg="/images/peinture-liquide.webp" 
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

export default Success;