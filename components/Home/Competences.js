import styled from 'styled-components';
import Link from 'next/link';
import { Construct, Bulb, Card } from '@styled-icons/ionicons-outline';

import { DarkDiv } from '@/elements/Divisions';
import { ServicesContainer } from '@/elements/FlexDiv';
import Button from '@/elements/Button';


const Container = styled(ServicesContainer)`
  max-width: 1000px;
`;

const FlexCont = styled.div`
  align-items: center;
  background-color: hsla(0deg, 0%, 100%, 0.5);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 40px 40px;
  min-height: 215px;
  width: 200px;
  padding: 20px;
  @media only screen and (max-width: 650px) {
    width: 60%;
  }
  @media only screen and (max-width: 450px) {
    width: 80%;
  }
`;

const Circle = styled.div`
  align-items: center;
  background-color: #2f2e2e;
  border-radius: 100%;
  color: white;
  display: flex;
  height: 60px;
  justify-content: center;
  position: relative;
  top: -50px;
  width: 60px;
  & + h3 {
    margin-top: -20px;
  }
`;

const Competences = () => {
  return (
    <section>
    <DarkDiv>
      <h2>Nos atouts</h2>
      <Container>
        <FlexCont>
          <Circle><Construct size={40} /></Circle>
          <h3>Savoir-faire</h3>
          <p>Notre expertise, notre réactivité et notre savoir-faire sont les gages d’une finition soignée.</p>
        </FlexCont>
        <FlexCont>
          <Circle><Bulb size={40} /></Circle>
          <h3>Expérience</h3>
          <p>Nous sommes spécialisés dans le traitement de surface de pièces métalliques depuis 1945.</p>
        </FlexCont>
        <FlexCont>
          <Circle><Card size={40} /></Circle>
          <h3>Tarifs</h3>
          <p>Nous proposons des prestations de qualité à des tarifs concurrentiels.</p>
        </FlexCont>
      </Container>
      <Link href="/contact" passHref><Button>Contactez-nous pour recevoir un devis gratuit</Button></Link>
    </DarkDiv>
    </section>
  );
}

export default Competences;