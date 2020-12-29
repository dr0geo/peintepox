import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.header`
  background-color: white;
  border-bottom: 15px solid #ce2026;
  padding: 0 40px;
  position: sticky;
  transition: ${props => props.isClicked ? 'height 0.3s ease-in-out, min-height 0.3s ease-in-out' : 'height 0.3s ease-in-out 0.3s, min-height 0.3s ease-in-out 0.3s'}; 
  top: 0;
  z-index: 100;
  @media only screen and (max-width: 1100px) {
    padding: 0 10px;
  }
  @media only screen and (max-width: 900px) {
    height: ${props => props.isClicked ? '100vh' : '190px'};
    min-height: ${props => props.isClicked ? '640px' : '190px'};
    position: relative;
  }
`;

const NavMenu = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  margin: auto;
  @media only screen and (max-width: 1100px) {
    justify-content: space-between;
  }
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const SpecialLink = styled.a`
  border-bottom: 1px solid transparent;
  color: ${props => props.isActive ? '#ce2026' : 'black'};
  transition: color 0.2s ease-in-out, border-bottom 0.2s ease-in-out;
  &:hover {
    border-bottom: ${props => props.isActive ? '1px solid transparent' : '1px solid #2f2e2e'};
  }
  @media only screen and (max-width: 900px) {
    min-width: 200px;
    padding: 20px 0;
    text-align: center;
    transform: ${props => props.isClicked ? 'scaleY(1)' : 'scaleY(0)'};
    transition: ${props => props.isClicked ? 'transform 0.2s ease-in-out 0.3s' : 'transform 0.2s ease-in-out'};
    width: 40%;
    & + & {
      border-top: 1px solid black;
    }
    &:hover {
      border-bottom: 1px solid transparent;
    }
  }
`;

const PhoneMenu = styled.div`
  align-items: center;
  font-size: 1.2rem;
  display: none;
  padding-bottom: 20px;
  padding-top: 10px;
  & > ion-icon {
    display: block;
    height: 30px;
    margin-right: 6px;
    position: relative;
    top: 1px;
    width: 30px;
  }
  &:hover {
    cursor: pointer;
  }
  @media only screen and (max-width: 900px) {
    display: flex;
  }
`;

const Logo = styled.img`
  display: block;
  height: 100px;
  width: 100px;
  @media only screen and (max-width: 900px) {
    height: 140px;
    width: 140px;
  }
`;

const Header = props => { 
  return (
    <Container isClicked={props.isClicked}>
      <NavMenu>
        <Link href="/"><a><Logo src="/images/logo.webp" alt="Logo Peintepox" /></a></Link>
        <PhoneMenu onClick={props.handleClick}><ion-icon name="menu-outline"></ion-icon>MENU</PhoneMenu>
        <Link href="/" passHref>
          <SpecialLink 
            isActive={props.active === 1 ? true : false}
            isClicked={props.isClicked}
            onClick={props.handleClick}
          >
            ACCUEIL
          </SpecialLink>
        </Link>
        <Link href="/decapage" passHref>
          <SpecialLink 
            isActive={props.active === 2 ? true : false}
            isClicked={props.isClicked}
            onClick={props.handleClick}
          >
            Décapage
          </SpecialLink>
        </Link>
        <Link href="/sablage" passHref>
          <SpecialLink 
            isActive={props.active === 3 ? true : false}
            isClicked={props.isClicked}
            onClick={props.handleClick}
          >
            Sablage
          </SpecialLink>
        </Link>
        <Link href="/traitement-anticorrosion" passHref>
          <SpecialLink
            isActive={props.active === 4 ? true : false}
            isClicked={props.isClicked}
            onClick={props.handleClick}
          >
            Traitement anticorrosion
          </SpecialLink>
        </Link>
        <Link href="/thermolaquage" passHref>
          <SpecialLink 
            isActive={props.active === 5 ? true : false}
            isClicked={props.isClicked}
            onClick={props.handleClick}
          >
            Thermolaquage
          </SpecialLink>
        </Link>
        <Link href="/peinture-liquide" passHref>
          <SpecialLink 
            isActive={props.active === 6 ? true : false}
            isClicked={props.isClicked}
            onClick={props.handleClick}
          >
            Peinture liquide
          </SpecialLink>
        </Link>
        <Link href="/contact" passHref>
          <SpecialLink
            isActive={props.active === 7 ? true : false}
            isClicked={props.isClicked}
            onClick={props.handleClick}
          >
            Contact
          </SpecialLink>
        </Link>
      </NavMenu>
    </Container>
  );
}

export default Header;