import styled from 'styled-components';
import Link from 'next/link';

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
  & a {
    border-bottom: 1px solid black;
  }
`;

const Description = () => {
  return (
    <Section>
      <h2>Un procédé de traitement de surface efficace</h2>
      <p>Nous nettoyons toutes sortes d’ouvrages en <strong>métal</strong> et en <strong>bois</strong> via la technique de projection de sable. Notre travail consiste à désoxyder et à désencrasser la surface du matériau afin qu’il retrouve son aspect d’origine et ses couleurs.</p><br />
      <p>Nos prestations de sablage sont proposées à des <strong>tarifs attractifs</strong>. Sur votre demande, nous effectuons également des travaux de <Link href="/peinture-fluide"><a title="Découvrez nos prestations de peinture fluide">peinture fluide</a></Link>.</p><br />
      <p>Depuis des années, de nombreux professionnels, particuliers, collectivités, industries et organismes publics nous ont confié leur projet.</p>
      <h2>Sablage d’ouvrages et de pièces de petites et de grandes dimensions</h2>
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
    </Section>
  );
}

export default Description;