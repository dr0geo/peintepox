import styled from 'styled-components';
import Link from 'next/link';

const Paragraph = styled.p`
  margin: 0 auto 40px auto;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  padding-bottom: 50px;
`;

const Card = styled.div`
  height: 350px;
  margin: 0 20px;
  width: 350px;
  &:nth-of-type(1) {
    background: url('/images/card.jpeg') center;
  }
  &:nth-of-type(2) {
    background: url('/images/sablage.jpeg') center;
  }
  &:nth-of-type(3) {
    background: url('/images/chem-pickling.jpg') center;
    background-size: cover;
  }
  &:nth-of-type(4) {
    background: url('/images/corrosion.jpeg') center;
    background-size: cover;
  }
`;

const Button = styled.button`
  background-color: #2f2e2e;
  border: none;
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
`;

const Expertise = () => {
  return (
    <section>
      <h2>Notre savoir-faire</h2>
      <Paragraph>Nous sommes au service des professionnels, des particuliers, des industries, des collectivités, ainsi que des organismes publics.</Paragraph>
      <Container>
        <Card><Link href="/thermolaquage"><Button>Thermolaquage</Button></Link></Card>
        <Card><Link href="/sablage"><Button>Sablage</Button></Link></Card>
        <Card><Link href="/decapage"><Button>Décapage</Button></Link></Card>
        <Card><Link href="/traitement-anti-corrosion"><Button>Traitement anti-corrosion</Button></Link></Card>
      </Container>
    </section>
  );
}

export default Expertise;