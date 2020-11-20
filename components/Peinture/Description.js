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
  & > p:last-of-type {
    margin: 30px auto;
    text-align: center;
  }
`;

const Description = () => {
  return (
    <Section>
      <h2>Experts en peinture fluide</h2>
      <p>Nous appliquons de la <strong>peinture acrylique</strong> sur des supports en <strong>bois</strong> ou en <strong>métal</strong>. Utilisant un matériel complet, nous possédons <strong>l’expertise</strong> et les <strong>compétences techniques</strong> nous permettant de mener à bien votre projet.</p><br />
      <p>Nous vous proposons également un large choix de <strong>finitions</strong> : mât, brillant, lisse, etc...</p><br />
      <p>Notre <strong>excellente réputation</strong> dans le domaine fait que nous sommes sollicités pour peindre des pièces utilisées dans le secteur <strong>nucléaire</strong> ainsi que dans <strong>l’armement</strong>.</p><br />
      <h2>Retrouvez aussi...</h2>
      <ServicesContainer>
        <Services bg="/images/card.webp" name="Thermolaquage" page="/thermolaquage" />
        <Services bg="/images/sablage.webp" name="Sablage" page="/sablage" />
        <Services bg="/images/chem-pickling.webp" name="Décapage" page="/decapage" />
        <Services bg="/images/corrosion.webp" name="Traitement anti-corrosion" page="/traitement-anti-corrosion" />
      </ServicesContainer>
      <p>Vous n'êtes pas certain de savoir ce qui correspond le mieux à vos besoins ? N'hésitez pas à <Link href="/contact"><a>nous contacter</a></Link>, nous serons ravis de vous aider.</p>
    </Section>
  );
}

export default Description;