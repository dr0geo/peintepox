import styled from 'styled-components';
import Link from 'next/link';

const Section = styled.section`
  & > p {
    margin: auto;
    text-align: center;
  }
  & a {
    border-bottom: 1px solid black;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 60px;
`;
const Companies = styled.img`
  display: block;
  height: 100px;
  margin: 15px 30px;
  width: 100px;
`;

const References = () => {
  return (
    <Section>
      <h2>Pourquoi travailler avec nous ?</h2>
      <p>Notre travail consiste à <Link href="/thermolaquage"><a title="Découvrez nos prestations de thermolaquage">appliquer de la poudre thermodurcissable</a></Link> sur des métaux ferreux. Nous pouvons également intervenir sur d’autres supports, qu'ils soient en <strong>bois</strong>, en <strong>acier</strong> ou en <strong>plastique</strong> pour des travaux de masticage, de ponçage et de <Link href="/peinture-fluide"><a title="Découvrez nos prestations de peinture fluide">peinture</a></Link>.</p>
      <br />
      <p>Nous disposons d'une <strong>équipe expérimentée</strong> et d’un atelier bien équipé pour répondre à vos besoins.</p>
      <br />
      <p>Nos <strong>délais</strong> de réalisation sont <strong>courts</strong> et <strong>respectés</strong>.</p>
      <br />
      <p>Nous vous garantissons un résultat <strong>précis</strong> et <strong>fiable</strong>.</p>
      <h2>Ils nous ont fait confiance</h2>
      <Container>
        <Companies src="/images/companies/armee.webp" alt="Logo Ministère des Armées" />
        <Companies src="/images/companies/sncf.webp" alt="Logo SNCF" />
        <Companies src="/images/companies/ratp.webp" alt="Logo RATP" />
        <Companies src="/images/companies/bon-marche.webp" alt="Logo Le Bon Marché" />
        <Companies src="/images/companies/dior.webp" alt="Logo Dior" />
        <Companies src="/images/companies/paul-smith.webp" alt="Logo Paul Smith" />
      </Container>
    </Section>
  );
}

export default References;