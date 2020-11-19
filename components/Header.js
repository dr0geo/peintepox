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
  color: ${props => props.isActive ? '#ce2026' : 'black'};
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${props => props.isActive ? '#ce2026' : '#2f2e2e'};
    border-bottom: ${props => props.isActive ? '1px solid transparent' : '1px solid #2f2e2e'};
  }
`;

const Logo = styled.img`
  display: block;
  height: 100px;
  width: 100px;
`;

const Header = props => {
  return (
    <Container>
      <NavMenu>
        <Link href="/"><a><Logo src="/images/logo.png" alt="Logo Peintepox" /></a></Link>
        <Link href="/"><SpecialLink isActive={props.active === 1 ? true : false}>ACCUEIL</SpecialLink></Link>
        <Link href="/thermolaquage"><SpecialLink isActive={props.active === 2 ? true : false}>Thermolaquage</SpecialLink></Link>
        <Link href="/peinture-fluide"><SpecialLink isActive={props.active === 3 ? true : false}>Peinture Fluide</SpecialLink></Link>
        <Link href="/sablage"><SpecialLink isActive={props.active === 4 ? true : false}>Sablage</SpecialLink></Link>
        <Link href="/decapage"><SpecialLink isActive={props.active === 5 ? true : false}>Décapage</SpecialLink></Link>
        <Link href="/traitement-anti-corrosion"><SpecialLink isActive={props.active === 6 ? true : false}>Traitement anti-corrosion</SpecialLink></Link>
        <Link href="/contact"><SpecialLink isActive={props.active === 7 ? true : false}>Contact</SpecialLink></Link>
        
      </NavMenu>
    </Container>
  );
}

export default Header;