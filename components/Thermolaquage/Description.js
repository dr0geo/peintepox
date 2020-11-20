import styled from 'styled-components';
import Link from 'next/link';
import Gallery from '@/components/Gallery';
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
`;

const FlexDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
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
  @media only screen and (max-width: 720px) {
    max-width: 530px;
  }
`;

const thermoImages = [
  {
    id: 'thermo1',
    url: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 'thermo2',
    url:'https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80'
  },
  {
    id: 'thermo3',
    url: 'https://images.unsplash.com/photo-1455165814004-1126a7199f9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 'thermo4',
    url: 'https://images.unsplash.com/photo-1522322512347-a0e57fd1744c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80'
  }
];

const Description = () => {
  return (
    <Section>
      <h2>Application d’une peinture en poudre sans solvant et sans composant toxique</h2>
      <p>Nous appliquons de la peinture en poudre, <strong>sans solvant</strong> et <strong>sans composant toxique</strong> sur des métaux ferreux et non ferreux :</p>
      <FlexDiv>
        <figure>
          <img src="/images/thermolaquage/Acier.webp" alt="Acier" />
          <figcaption><em>Acier</em></figcaption>
        </figure>
        <figure>
          <img src="/images/thermolaquage/Fer.webp" alt="Fer" />
          <figcaption><em>Fer</em></figcaption>
        </figure>
        <figure>
          <img src="/images/thermolaquage/Cu.webp" alt="Cuivre" />
          <figcaption><em>Cuivre</em></figcaption>
        </figure>
        <figure>
          <img src="/images/thermolaquage/Al.webp" alt="Aluminium" />
          <figcaption><em>Aluminium</em></figcaption>
        </figure>
      </FlexDiv>
      <p><strong>Perfectionnistes</strong>, nous accordons une grande importance aux finitions. Outre le thermolaquage, le <Link href="/traitement-anti-corrosion"><a title="Découvrez nos prestations de traitement anti-corrosion">traitement anti-corrosion</a></Link> figure aussi parmi nos prestations. Nous proposons nos services aux particuliers, aux industries, aux collectivités et aux organismes publics en région parisienne. Nous travaillons également pour l’Armée Française.</p>
      <Gallery images={thermoImages} />
      <h2>Les avantages du thermolaquage</h2>
      <p>Le thermolaquage est une technique permettant de protéger la surface d’une pièce et d’améliorer son aspect. Elle offre un large panel de couleurs, d’effets (métallisé, texturé, sablé…) et de finitions.</p><br />
      <p>Plus <strong>économique</strong> et <strong>écologique</strong> que la peinture liquide, ce procédé ne nécessite quasiment aucun temps de séchage. C’est d’ailleurs la raison pour laquelle le thermolaquage est utilisé pour peindre des pièces détachées automobiles, comme les châssis et les jantes.</p><br />
      <p>Maîtrisant parfaitement toutes les étapes de cette opération, nous vous garantissons un résultat alliant <strong>esthétique</strong>, <strong>résistance</strong> et <strong>durabilité</strong>.</p><br />
      <h2>Retrouvez aussi...</h2>
      <ServicesContainer>
        <Services bg="/images/fluid.webp" name="Peinture fluide" page="/peinture-fluide" />
        <Services bg="/images/sablage.webp" name="Sablage" page="/sablage" />
        <Services bg="/images/chem-pickling.webp" name="Décapage" page="/decapage" />
        <Services bg="/images/corrosion.webp" name="Traitement anti-corrosion" page="/traitement-anti-corrosion" />
      </ServicesContainer>     
      <p>Vous n'êtes pas certain de savoir ce qui correspond le mieux à vos besoins ? N'hésitez pas à <Link href="/contact"><a>nous contacter</a></Link>, nous serons ravis de vous aider.</p>
    </Section>
  );
}

export default Description;