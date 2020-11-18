import styled from 'styled-components';
import Head from 'next/head';
import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import ContactInfo from '@/components/ContactInfo';
import Footer from '@/components/Footer';

const Legal = () => {
  const titleUrl = '/images/mentions.jpg';

  return (
    <>
      <Head>
        <title>Mentions Légales</title>
      </Head>
      <Header />
      <PageTitle url={titleUrl}>
        <h1>Mentions Légales</h1>
      </PageTitle>
      <ContactInfo />
      <Footer />
    </>
  );
}

export default Legal;