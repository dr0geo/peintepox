import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.footer`
  background-color: #2f2e2e;
  color: white;
  display: flex;
  justify-content: center;
  & ion-icon {
    fill: white;
    height: 35px;
    margin-right: 15px;
    width: 35px;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 40px;
  width: 235px;
  & > div {
    margin: 10px 0;
    padding: 10px 0;
    & > a {
      transition: opacity 0.2s ease-in-out;
      &:hover {
        opacity: 0.75;
      }
    }
  }
  & > ul a {
    color: white;
  }
  & > p > a {
    color: white;
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <Container>
      <StyledDiv>
        <h4>Suivez Peintepox</h4>
        <div>
          <a href="https://www.facebook.com/Thermolaquage-et-sablage-%C3%A0-Bagneux-108736644096546/" target="_blank"><ion-icon name="logo-facebook"></ion-icon></a>
          <a href="https://goo.gl/maps/zX1kKst1j9VQGCKX8" target="_blank"><ion-icon name="logo-google"></ion-icon></a>
        </div>
      </StyledDiv>
      <StyledDiv>
        <h4>Nos services</h4>
        <ul>
          <li><Link href="/thermolaquage"><a>Thermolaquage</a></Link></li>
          <li><Link href="/sablage"><a>Sablage</a></Link></li>
          <li><Link href="/decapage"><a>Décapage</a></Link></li>
          <li><Link href="/traitement-anti-corrosion"><a>Traitement anti-corrosion</a></Link></li>
        </ul>
      </StyledDiv>
      <StyledDiv>
        <h4>Où nous trouver</h4>
        <p>63, rue Alphonse Pluchet<br />92220 BAGNEUX</p>
      </StyledDiv>
      <StyledDiv>
        <h4>Mentions Légales</h4>
        <p>Cliquez <Link href='/mentions-legales'><a>ici</a></Link> pour voir nos mentions légales.</p>
      </StyledDiv>
    </Container>
  );
}

export default Footer;