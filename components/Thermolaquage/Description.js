import styled from 'styled-components';
import Link from 'next/link';

const Section = styled.section`
  margin: auto;
  margin-bottom: 50px;
  & > p {
    margin: auto;
  }
  & a {
    border-bottom: 1px solid black;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
  max-width: 900px;
  & > figure > img {
    display: block;
    height: auto;
    width: 100px;
  }
  & > figure > figcaption {
    text-align: center;
  }
`;

const Description = () => {
  return (
    <Section>
      <h2>Application d’une peinture en poudre sans solvant et sans composant toxique</h2>
      <p>Nous appliquons de la peinture en poudre, <strong>sans solvant</strong> et <strong>sans composant toxique</strong> sur des métaux ferreux et non ferreux :</p>
      <FlexDiv>
        <figure>
          <img src="/images/thermolaquage/Acier.png" alt="Acier" />
          <figcaption><em>Acier</em></figcaption>
        </figure>
        <figure>
          <img src="/images/thermolaquage/Fer.png" alt="Fer" />
          <figcaption><em>Fer</em></figcaption>
        </figure>
        <figure>
          <img src="/images/thermolaquage/Cu.png" alt="Cuivre" />
          <figcaption><em>Cuivre</em></figcaption>
        </figure>
        <figure>
          <img src="/images/thermolaquage/Al.png" alt="Aluminium" />
          <figcaption><em>Aluminium</em></figcaption>
        </figure>
      </FlexDiv>
      <p><strong>Perfectionnistes</strong>, nous accordons une grande importance aux finitions. Outre le thermolaquage, le <Link href="/traitement-anti-corrosion"><a title="Découvrez notre traitement anti-corrosion">traitement anti-corrosion</a></Link> figure aussi parmi nos prestations. Nous proposons nos services aux particuliers, aux industries, aux collectivités et aux organismes publics en région parisienne. Nous travaillons également pour l’Armée Française.</p>
      <h2>Les avantages du thermolaquage</h2>
      <p>Le thermolaquage est une technique permettant de protéger la surface d’une pièce et d’améliorer son aspect. Elle offre un large panel de couleurs, d’effets (métallisé, texturé, sablé…) et de finitions.</p><br />
      <p>Plus <strong>économique</strong> et <strong>écologique</strong> que la peinture liquide, ce procédé ne nécessite quasiment aucun temps de séchage. C’est d’ailleurs la raison pour laquelle le thermolaquage est utilisé pour peindre des pièces détachées automobiles, comme les châssis et les jantes.</p><br />
      <p>Maîtrisant parfaitement toutes les étapes de cette opération, nous vous garantissons un résultat alliant <strong>esthétique</strong>, <strong>résistance</strong> et <strong>durabilité</strong>.</p><br />
      <p>En fonction de votre projet, vous pourriez être intéressé par nos prestations de <Link href="/peinture-fluide"><a title="Découvrez nos prestations de peinture fluide">peinture fluide</a></Link> afin de parfaire la peinture de vos pièces. Vous n'êtes pas certain de savoir ce qui correspond le mieux à vos besoins ? N'hésitez pas à <Link href="/contact"><a>nous contacter</a></Link>, nous serons ravis de vous aider.</p>
    </Section>
  );
}

export default Description;