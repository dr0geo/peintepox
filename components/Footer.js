import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.footer`
  background-color: #2f2e2e;
  }
`;

const Wrapper = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  margin: auto;
  max-width: 1250px;
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
    text-align: left;
  }
  & > p > a {
    border-bottom: 1px solid white;
    color: white;
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
    & > p {
      text-align: center;
    }
    & > div > a + a {
      margin-left: 20px;
    }
    & > ul {
      padding-left: 6%;
      padding-right: 6%;
      & > li {
        line-height: 2.5rem;
        list-style-position: outside;
        list-style-type: none;
        & > a {
          padding: 16px 10px;
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <StyledDiv>
          <h4>Suivez Peintepox</h4>
          <div>
            <a href="https://www.facebook.com/Thermolaquage-et-sablage-%C3%A0-Bagneux-108736644096546/" rel="noreferrer" target="_blank"><ion-icon name="logo-facebook"></ion-icon></a>
            <a href="https://goo.gl/maps/zX1kKst1j9VQGCKX8" rel="noreferrer" target="_blank"><ion-icon name="logo-google"></ion-icon></a>
          </div>
        </StyledDiv>
        <StyledDiv>
          <h4>Nos services</h4>
          <ul>
            <li><Link href="/decapage"><a>Décapage</a></Link></li>
            <li><Link href="/sablage"><a>Sablage</a></Link></li>
            <li><Link href="/traitement-anticorrosion"><a>Traitement anticorrosion</a></Link></li>
            <li><Link href="/thermolaquage"><a>Thermolaquage</a></Link></li>
            <li><Link href="/peinture-liquide"><a>Peinture liquide</a></Link></li> 
          </ul>
        </StyledDiv>
        <StyledDiv>
          <h4>Où nous trouver</h4>
          <p>63, rue Alphonse Pluchet<br />92220 BAGNEUX<br /><a href="https://www.google.com/maps/place/Peint%C3%A9pox/@48.7997621,2.3000693,15z/data=!4m5!3m4!1s0x0:0x1c1be8ded7e92c91!8m2!3d48.7997621!4d2.3000693" rel="noreferrer" target="_blank">Voir sur Google Maps</a></p>
        </StyledDiv>
        <StyledDiv>
          <h4>Mentions Légales</h4>
          <p>Cliquez <Link href='/mentions-legales'><a>ici</a></Link> pour voir nos mentions légales.</p>
        </StyledDiv>
      </Wrapper> 
    </Container>
  );
}

export default Footer;