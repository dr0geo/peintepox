import styled from 'styled-components';
import Link from 'next/link';

const Paragraph = styled.p`
  margin: 0 auto;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  padding-bottom: 50px;
  max-width: 1350px;
  @media only screen and (min-width: 1750px) {
    max-width: 100%;
  }
}
`;

const Card = styled.div`
  border-radius: 5px 5px 0px 0px;
  height: 320px;
  margin: 50px 20px;
  width: 300px;
  &:nth-of-type(1) {
    background: url('/images/card.webp') center;
  }
  &:nth-of-type(2) {
    background: url('/images/fluid.webp') center;
    background-size: cover;
  }
  &:nth-of-type(3) {
    background: url('/images/sablage.webp') center;
  }
  &:nth-of-type(4) {
    background: url('/images/chem-pickling.webp') center;
    background-size: cover;
  }
  &:nth-of-type(5) {
    background: url('/images/corrosion.webp') center;
    background-size: cover;
  }
  @media only screen and (max-width: 900px) {
    width: 80%;
  }
`;

const Button = styled.button`
  background-color: #2f2e2e;
  border: none;
  border-radius: 0px 0px 5px 5px;
  color: white;
  padding: 10px 0;
  position: relative;
  top: 100%;
  transition: opacity 0.2s ease-in-out;
  width: 100%;
  &:hover {
    cursor: pointer;
    opacity: 0.85;
  }
  @media only screen and (max-width: 900px) {
    font-size: 1rem;
  }
`;

const Expertise = () => {
  return (
    <section>
      <h2>Notre savoir-faire</h2>
      <Paragraph>Nous sommes au service des professionnels, des particuliers, des industries, des collectivités, ainsi que des organismes publics.</Paragraph>
      <Container>
        <Card><Link href="/thermolaquage"><Button>Thermolaquage</Button></Link></Card>
        <Card><Link href="/peinture-fluide"><Button>Peinture fluide</Button></Link></Card>
        <Card><Link href="/sablage"><Button>Sablage</Button></Link></Card>
        <Card><Link href="/decapage"><Button>Décapage</Button></Link></Card>
        <Card><Link href="/traitement-anti-corrosion"><Button>Traitement anti-corrosion</Button></Link></Card>
      </Container>
    </section>
  );
}

export default Expertise;