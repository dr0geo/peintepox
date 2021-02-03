import styled from 'styled-components';
import Link from 'next/link';
import { WhiteDiv, DarkDiv } from '@/elements/Divisions';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  max-width: 1000px;
  @media only screen and (max-width: 1000px) {
    max-width: 700px;
  }
`;

const Companies = styled.img`
  display: block;
  height: 100px;
  margin: 30px;
  width: 100px;
`;

const References = () => {
  return (
    <section>
      <WhiteDiv>
        <h2>Pourquoi travailler avec nous ?</h2>
        <p>Notre travail consiste à appliquer des <Link href="/thermolaquage"><a title="Découvrez nos prestations de thermolaquage">poudres thermodurcissables</a></Link> sur des métaux ferreux et non ferreux, aluminium, inox, alliages... Nous pouvons également intervenir sur d’autres supports, qu'ils soient en <strong>bois</strong>, en <strong>medium</strong> ou en <strong>plastique</strong> et assurons la préparation par masticage, ponçage, apprêt avant l'application de <Link href="/peinture-liquide"><a title="Découvrez nos prestations de peinture liquide">peinture</a></Link>.</p>
        <br />
        <p>Nous disposons d'une <strong>équipe expérimentée</strong> et d’un atelier bien équipé pour répondre à vos besoins.</p>
        <br />
        <p>Nos <strong>délais</strong> de réalisation sont courts et <strong>respectés</strong>.</p>
        <br />
        <p>Nous mettons tout en œuvre pour un résultat conforme à vos exigences.</p>
      </WhiteDiv>
      <DarkDiv>
        <h2>Ils nous ont fait confiance</h2>
        <Container>
          <Companies 
            src="/images/companies/armee.webp" 
            alt="Logo Ministère des Armées" 
          />
          <Companies 
            src="/images/companies/sncf.webp" 
            alt="Logo SNCF"
          />
          <Companies 
            src="/images/companies/ratp.webp" 
            alt="Logo RATP"
          />
          <Companies 
            src="/images/companies/bon-marche.webp" 
            alt="Logo Le Bon Marché"
          />
          <Companies 
            src="/images/companies/dior.webp" 
            alt="Logo Dior"
          />
          <Companies 
            src="/images/companies/automatic-systems.webp" 
            alt="Logo Automatic Systems"
          />
          <Companies 
            src="/images/companies/bouygues.webp" 
            alt="Logo Bouygues" 
          />
          <Companies 
            src="/images/companies/mairie.webp" 
            alt="Logo Mairie de Paris"
          />
          <Companies 
            src="/images/companies/alpha-store.webp" 
            alt="Logo Alpha-Store"
          />
          <Companies 
            src="/images/companies/schindler.webp" 
            alt="Logo Schindler"
          />
          <Companies 
            src="/images/companies/dupont-kine.webp" 
            alt="Logo Dupont Kine"
          />
          <Companies 
            src="/images/companies/signature.webp" 
            alt="Logo Signature"
          />
        </Container>
      </DarkDiv>
    </section>
  );
}

export default References;