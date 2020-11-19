import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import ContactInfo from '@/components/ContactInfo';
import Footer from '@/components/Footer';
import styled from 'styled-components';

const StyledAnchor = styled.a`
  border-bottom: 1px solid white;
  color: white;
`;

const Success = props => {
  const titleUrl = '/images/mailbox.jpg';

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Peintepox : Message envoyé</title>
      </Head>
      <Header isClicked={props.isClicked} handleClick={props.handleClick} />
      <main>
        <PageTitle url={titleUrl}>
          <h1>Message envoyé</h1>
          <p>Votre message a bien été envoyé et nous faisons tout notre possible pour vous répondre au plus vite.<br/>Vous pouvez maintenant revenir à la <Link href="/"><StyledAnchor>page d'accueil</StyledAnchor></Link>.</p>
        </PageTitle>
        <ContactInfo />
      </main>
      <Footer />
    </>
  );
}

export default Success;