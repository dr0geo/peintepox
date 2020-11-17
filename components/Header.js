import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
  align-items: center;
  background-color: white;
  border-bottom: 15px solid #CE2026;
  display: flex;
  justify-content: space-evenly;
  margin: auto;
  padding: 10px 0;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
`;

const Logo = styled.img`
  display: block;
  height: 60px;
  width: 60px;
`;

const Header = () => {
  return (
    <Container>
      <Link href="/"><a><Logo src="/images/logo.png" alt="Logo Peintepox" /></a></Link>
      <Link href="/"><a>ACCUEIL</a></Link>
      <Link href="/thermolaquage"><a>Thermolaquage</a></Link>
      <Link href="/sablage"><a>Sablage</a></Link>
      <Link href="/decapage"><a>Décapage</a></Link>
      <Link href="/traitement-anti-corrosion"><a>Traitement anti-corrosion</a></Link>
      <Link href="/contact"><a>Contact</a></Link>
    </Container>
  );
}

export default Header;