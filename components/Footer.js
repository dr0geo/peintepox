import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.footer`
  background-color: #2f2e2e;
  color: white;
  display: flex;
  justify-content: space-between;
  & ion-icon {
    fill: white;
    height: 35px;
    margin-right: 15px;
    width: 35px;
  }
  @media only screen and (max-width: 900px) {
    align-items: center;
    flex-direction: column;
    & ion-icon {
      margin-right: 0;
    }
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 40px;
  min-width: 220px;
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
  & > p {
    padding-left: 0;
    padding-right: 0;
  }
  & > p > a {
    color: white;
    text-decoration: underline;
  }
  @media only screen and (max-width: 1150px) {
    margin: 0 10px;
    min-width: 210px;
    & > ul {
      padding-left: 0;
    }
  }
  @media only screen and (max-width: 900px) {
    align-items: center;
    text-align: center;
    width: 70%;
    & > h4 {
      font-size: 1.5rem;
      font-weight: 400;
      text-transform: uppercase;
    }
    & > div > a + a {
      margin-left: 20px;
    }
    & > ul {
      padding-left: 6%;
      padding-right: 6%;
    }
    & > ul > li {
      list-style-position: outside;
      list-style-type: none;
    }
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
          <li><Link href="/peinture-fluide"><a>Peinture fluide</a></Link></li>
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