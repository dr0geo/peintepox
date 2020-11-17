import styled from 'styled-components';
import Link from 'next/link';

const Section = styled.section`
  align-items: center;
  background-color: #e1e1e1;
  display: flex;
  flex-direction: column;
  text-align: center;
  & > h2 {
    margin-bottom: 10px;
    padding-bottom: 10px;
  }
  & > p {
    width: 800px;
  }
`;

const Container = styled.div`
  display: flex;
`;

const FlexCont = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 60px;
  max-width: 200px;
`;

const Circle = styled.div`
  align-items: center;
  background-color: #2f2e2e;
  border-radius: 100%;
  color: white;
  display: flex;
  height: 60px;
  justify-content: center;
  margin: 10px 0;
  width: 60px;
  & > ion-icon {
    height: 40px;
    width: 40px;
  }
`;

const Button = styled.button`
  background: #ce2026;
  border: 1px solid #ce2026;
  border-radius: 5px;
  margin: 40px auto;
  padding: 10px 20px;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: white;
    cursor: pointer;
    & a {
      color: #ce2026;
    }
  }
  & a {
    color: white;
    transition: color: 0.2s ease-in-out;
  }
`;

const Competences = () => {
  return (
    <Section>
      <h2>Nos domaines de compétences</h2>
      <ul>
        <li>Thermolaquage sur tous supports férreux</li>
        <li>Sablage en cabine (5m/5m)</li>
        <li>Décapage chimique, acier, bois, aluminium</li>
        <li>Peinture liquide sur tous supports acier, médium et plastique</li>
      </ul>
      <p>Nous sommes au service des professionnels, des particuliers, des industries, des collectivités, des organismes publics et de l’Armée.</p>
      <p>Nos méthodes de décapage sont adaptées à une variété de supports (acier et bois).</p>
      <h2>Nos atouts</h2>
      <Container>
        <FlexCont>
          <Circle><ion-icon name="card-outline"></ion-icon></Circle>
          <h3>Tarifs</h3>
          <p>Nous proposons des prestations de qualité à des tarifs concurrentiels.</p>
        </FlexCont>
        <FlexCont>
          <Circle><ion-icon name="ribbon-outline"></ion-icon></Circle>
          <h3>Professionnalisme</h3>
          <p>Notre entreprise dispose de plusieurs certifications et offre de nombreuses garanties.</p>
        </FlexCont>
        <FlexCont>
          <Circle><ion-icon name="construct-outline"></ion-icon></Circle>
          <h3>Savoir-faire</h3>
          <p>Notre expertise, notre réactivité et notre savoir-faire sont les gages d’une finition soignée.</p>
        </FlexCont>
        <FlexCont>
          <Circle><ion-icon name="bulb-outline"></ion-icon></Circle>
          <h3>Expérience</h3>
          <p>Nous sommes spécialisés dans le traitement de surface de pièces métalliques depuis 1945.</p>
        </FlexCont>
      </Container>
      <Button><Link href="/contact"><a>Contactez-nous pour recevoir un devis gratuit</a></Link></Button>
    </Section>
  );
}

export default Competences;