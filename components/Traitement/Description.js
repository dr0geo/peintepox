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
      <h2>Une protection efficace et durable contre la rouille</h2>
      <p>Pour protéger les pièces métalliques <strong>contre la rouille</strong>, nous appliquons des <strong>enduits</strong> qui font office de <strong>barrière à l’oxydation</strong>. Ils sont très résistants aux agressions climatiques et peuvent être appliqués <strong>sur tous types de supports</strong> en fer, en acier et en cuivre (pièces automobiles, ouvrages industriels, matériaux de construction, etc...).</p>
      <DarkDiv>
        <h2>Étapes du traitement anti-corrosion</h2>
        <p>Nous <strong>maîtrisons parfaitement</strong> les différentes étapes du traitement anti-corrosion des métaux :</p>
        <ul>
          <li>Nettoyage et préparation du support</li>
          <li>Application du produit curatif contre la rouille</li>
          <li>Application d’une couche de produit isolant</li>
          <li><Link href="/thermolaquage"><a title="Découvrez nos prestations de thermolaquage">Thermolaquage</a></Link></li>
        </ul><br />
        <p>Quelles que soient la forme, les dimensions et les caractéristiques de la pièce métallique à traiter, nous n’avons qu’un seul objectif : <strong>enlever toutes les parties rouillées</strong> qui ternissent son état et son aspect.</p><br />
      </DarkDiv>
      
      <h2>Retrouvez aussi...</h2>
      <ServicesContainer>
        <Services bg="/images/card.webp" name="Thermolaquage" page="/thermolaquage" />
        <Services bg="/images/fluid.webp" name="Peinture fluide" page="/peinture-fluide" />
        <Services bg="/images/sablage.webp" name="Sablage" page="/sablage" />
        <Services bg="/images/chem-pickling.webp" name="Décapage" page="/decapage" />
      </ServicesContainer>
      <p>Vous n'êtes pas certain de savoir ce qui correspond le mieux à vos besoins ? N'hésitez pas à <Link href="/contact"><a>nous contacter</a></Link>, nous serons ravis de vous aider.</p>
    </Section>
  );
}

export default Description;