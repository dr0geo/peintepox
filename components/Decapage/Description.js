import styled from 'styled-components';
import Link from 'next/link';
import Services from '@/components/Services';
import ServicesContainer from '@/components/ServicesContainer';

const Section = styled.section`
  margin: auto;
  margin-bottom: 50px;
  & > p {
    margin: auto;
  }
  & > ul {
    margin: auto;
    max-width: 800px;
  }
  & > p > a {
    border-bottom: 1px solid black;
  }
`;

const Description = () => {
  return (
    <Section>
      <h2>Les objectifs du décapage</h2>
      <p>Nous redonnons aux ouvrages en métal (fer, acier, inox, cuivre, aluminium, etc...) leur <strong>aspect d’origine</strong>. Pour ce faire, nous enlevons la couche de matière qui s’est déposée à leur surface. Grâce à notre <strong>polyvalence</strong>, nous intervenons sur différents types de supports :</p>
      <ul>
        <li>façades</li>
        <li>carrelages et meubles métalliques</li>
        <li>carrosserie automobile</li>
        <li>jantes</li>
        <li>portails</li>
        <li>garde-corps</li>
        <li>volets</li>
      </ul>
      <h2>Une technique innovante</h2>
      <p>Nous utilisons des techniques de décapage innovantes afin de redonner aux pièces métalliques, leur apparence d’antan. Les abrasifs que nous utilisons sont <strong>efficaces</strong> et <strong>n’endommagent pas</strong> la surface des ouvrages décapés.</p><br />
      <p><strong>Depuis 1945</strong>, nous avons pris en main de nombreux projets de décapage pour le compte des professionnels, des particuliers, des industries, des collectivités et des organismes publics.</p><br />
      <h2>Retrouvez aussi...</h2>
      <ServicesContainer>
        <Services bg="/images/card.webp" name="Thermolaquage" page="/thermolaquage" />
        <Services bg="/images/fluid.webp" name="Peinture fluide" page="/peinture-fluide" />
        <Services bg="/images/sablage.webp" name="Sablage" page="/sablage" />
        <Services bg="/images/corrosion.webp" name="Traitement anti-corrosion" page="/traitement-anti-corrosion" />
      </ServicesContainer>
      <p>Vous n'êtes pas certain de savoir ce qui correspond le mieux à vos besoins ? N'hésitez pas à <Link href="/contact"><a>nous contacter</a></Link>, nous serons ravis de vous aider.</p>
    </Section>
  );
}

export default Description;