import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
  align-items: center;
  background-color: white;
  border-bottom: 10px solid #CE2026;
  display: flex;
  justify-content: space-evenly;
  margin: auto;
  padding: 10px 0;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
`;

const Anchor = styled.a`
  color: black;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

const Img = styled.img`
  display: block;
  height: 60px;
  width: 60px;
`;

const Header = () => {
  return (
    <Container>
      <Link href="/"><a><Img src="/images/logo.png" alt="Logo Peintepox" /></a></Link>
      <Link href="/"><Anchor>ACCUEIL</Anchor></Link>
      <Link href="/peinture-thermolaquage"><Anchor>Peinture Thermolaquage</Anchor></Link>
      <Link href="/sablage"><Anchor>Sablage</Anchor></Link>
      <Link href="/decapage"><Anchor>Décapage</Anchor></Link>
      <Link href="/traitement-anti-corrosion"><Anchor>Traitement anti-corrosion</Anchor></Link>
      <Link href="/contact"><Anchor>Contact</Anchor></Link>
    </Container>
  );
}

export default Header;