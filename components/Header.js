import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.header`
  background-color: white;
  border-bottom: 15px solid #ce2026;
  padding: 0 40px;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavMenu = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  margin: auto;
`;

const SpecialLink = styled.a`
  border-bottom: 1px solid transparent;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #2f2e2e;
    border-bottom: 1px solid #2f2e2e;
  }
`;

const Logo = styled.img`
  display: block;
  height: 100px;
  width: 100px;
`;

const Header = () => {
  return (
    <Container>
      <NavMenu>
        <Link href="/"><a><Logo src="/images/logo.png" alt="Logo Peintepox" /></a></Link>
        <Link href="/"><SpecialLink>ACCUEIL</SpecialLink></Link>
        <Link href="/thermolaquage"><SpecialLink>Thermolaquage</SpecialLink></Link>
        <Link href="/sablage"><SpecialLink>Sablage</SpecialLink></Link>
        <Link href="/decapage"><SpecialLink>Décapage</SpecialLink></Link>
        <Link href="/traitement-anti-corrosion"><SpecialLink>Traitement anti-corrosion</SpecialLink></Link>
        <Link href="/contact"><SpecialLink>Contact</SpecialLink></Link>
      </NavMenu>
    </Container>
  );
}

export default Header;