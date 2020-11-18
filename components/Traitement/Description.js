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
      <h2>Une protection efficace et durable contre la rouille</h2>
      <p>Pour protéger les pièces métalliques <strong>contre la rouille</strong>, nous appliquons des <strong>enduits</strong> qui font office de <strong>barrière à l’oxydation</strong>. Ils sont très résistants aux agressions climatiques et peuvent être appliqués <strong>sur tous types de supports</strong> en fer, en acier et en cuivre (pièces automobiles, ouvrages industriels, matériaux de construction, etc...).</p>
      <h2>Étapes du traitement anti-corrosion</h2>
      <p>Nous <strong>maîtrisons parfaitement</strong> les différentes étapes du traitement anti-corrosion des métaux :</p>
      <ul>
        <li>Nettoyage et préparation du support</li>
        <li>Application du produit curatif contre la rouille</li>
        <li>Application d’une couche de produit isolant</li>
        <li><Link href="/thermolaquage"><a>Thermolaquage</a></Link></li>
      </ul><br />
      <p>Quelles que soient la forme, les dimensions et les caractéristiques de la pièce métallique à traiter, nous n’avons qu’un seul objectif : <strong>enlever toutes les parties rouillées</strong> qui ternissent son état et son aspect.</p><br />
      <p>Dans certains cas, vous pouvez être intéressé par nos prestations de <Link href="/decapage"><a>décapage</a></Link> afin de parfaire le traitement de vos pièces. Vous n'êtes pas certain de savoir ce qui correspond le mieux à vos besoins ? N'hésitez pas à <Link href="/contact"><a>nous contacter</a></Link>, nous serons ravis de vous aider.</p>
    </Section>
  );
}

export default Description;