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
  & > p > a {
    border-bottom: 1px solid black;
  }
  & > p:last-of-type {
    margin: 30px auto;
    text-align: center;
  }
`;

const DarkDiv = styled.div`
  background-color: #e1e1e1;
  margin: 40px 0 20px 0;
  padding: 20px 0 40px 0;
  & > * {
    margin: auto;
  }
  & > ul {
    max-width: 800px;
  }
`;

const Description = () => {
  return (
    <Section>
      <h2>Un procédé de traitement de surface efficace</h2>
      <p>Nous nettoyons toutes sortes d’ouvrages en <strong>métal</strong> et en <strong>bois</strong> via la technique de projection de sable. Notre travail consiste à désoxyder et à désencrasser la surface du matériau afin qu’il retrouve son aspect d’origine et ses couleurs.</p><br />
      <p>Nos prestations de sablage sont proposées à des <strong>tarifs attractifs</strong>. Sur votre demande, nous effectuons également des travaux de <Link href="/peinture-fluide"><a title="Découvrez nos prestations de peinture fluide">peinture fluide</a></Link>.</p><br />
      <p>Depuis des années, de nombreux professionnels, particuliers, collectivités, industries et organismes publics nous ont confié leur projet.</p>
      <DarkDiv>
        <h2>Pièces de toutes dimensions</h2>
        <p>Nous possédons la <strong>main-d’œuvre qualifée</strong> et une cabine de <strong>5 x 5 mètres</strong> afin d'effectuer le sablage des ouvrages de petites et de grandes dimensions.</p><br />
        <p>Sollicitez nos services pour le sablage des :</p>
        <ul>
          <li>Meubles</li>
          <li>Façades</li>
          <li>Poutres</li>
          <li>Grilles</li>
          <li>Pièces automobiles (jantes, carrosserie…)</li>
          <li>Persiennes</li>
          <li>Portails</li>
          <li>Barrières</li>
        </ul>
      </DarkDiv>
      <h2>Retrouvez aussi...</h2>
      <ServicesContainer>
        <Services bg="/images/card.webp" name="Thermolaquage" page="/thermolaquage" />
        <Services bg="/images/fluid.webp" name="Peinture fluide" page="/peinture-fluide" />
        <Services bg="/images/chem-pickling.webp" name="Décapage" page="/decapage" />
        <Services bg="/images/corrosion.webp" name="Traitement anti-corrosion" page="/traitement-anti-corrosion" />
      </ServicesContainer>
      <p>Vous n'êtes pas certain de savoir ce qui correspond le mieux à vos besoins ? N'hésitez pas à <Link href="/contact"><a>nous contacter</a></Link>, nous serons ravis de vous aider.</p>
    </Section>
  );
}

export default Description;