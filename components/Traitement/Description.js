import styled from 'styled-components';
import Link from 'next/link';
import { WhiteDiv, DarkDiv } from '@/elements/Divisions';
import { IconsDiv, ServicesContainer } from '@/elements/FlexDiv';
import Figure from '../elements/IconFigure';
import Services from '@/components/Services';

const SpecialIconsDiv = styled(IconsDiv)`
  margin-bottom: 15px;
  max-width: 850px;
  & > figure {
    align-items: center;
    display: flex;
    flex-direction: column;
    min-width: 330px;
    & > img {
      align-self: center;
    }
    & > figcaption {
      max-width: 400px;
    }
    &:last-of-type > figcaption {
      border-bottom: 1px solid black;
    }
  }
`;

const Description = () => {
  return (
    <section>
      <WhiteDiv>
        <h2>Une protection efficace et durable contre la rouille</h2>
        <p>Pour protéger les pièces métalliques <strong>contre la rouille</strong>, nous appliquons des <strong>enduits</strong> qui font office de <strong>barrière à l’oxydation</strong>. Ils sont très résistants aux agressions climatiques et peuvent être appliqués <strong>sur tous types de supports</strong> en fer, en acier et en cuivre (pièces automobiles, ouvrages industriels, matériaux de construction, etc...).</p>
      </WhiteDiv>
      <DarkDiv>
        <h2>Étapes du traitement anti-corrosion</h2>
        <p>Nous <strong>maîtrisons parfaitement</strong> les différentes étapes du traitement anti-corrosion des métaux :</p>
        <SpecialIconsDiv>
          <Figure 
            name="Nettoyage et préparation du support"
            url="/images/icons/traitement/nettoyage.webp"
          />
          <Figure 
            name="Application du produit curatif contre la rouille"
            url="/images/icons/traitement/rouille.webp"
          />
          <Figure 
            name="Application d’une couche de produit isolant"
            url="/images/icons/traitement/isolation.webp"
          />
          <figure>
            <img src="/images/icons/traitement/thermolaquage.webp" alt="Thermolaquage" />
            <figcaption><em><Link href="/thermolaquage"><a title="Découvrez nos prestations de thermolaquage">Thermolaquage</a></Link></em></figcaption>
          </figure>
        </SpecialIconsDiv>
        <p>Quelles que soient la forme, les dimensions et les caractéristiques de la pièce métallique à traiter, nous n’avons qu’un seul objectif : <strong>enlever toutes les parties rouillées</strong> qui ternissent son état et son aspect.</p><br />
      </DarkDiv>
      <WhiteDiv>
        <h2>Retrouvez aussi...</h2>
        <ServicesContainer>
          <Services bg="/images/chem-pickling.webp" name="Décapage" page="/decapage" />
          <Services bg="/images/sablage.webp" name="Sablage" page="/sablage" />
          <Services bg="/images/card.webp" name="Thermolaquage" page="/thermolaquage" />
          <Services bg="/images/liquid.webp" name="Peinture liquide" page="/peinture-liquide" />
        </ServicesContainer>
        <p>Vous n'êtes pas certain de savoir ce qui correspond le mieux à vos besoins ? N'hésitez pas à <Link href="/contact"><a title="Accédez au formulaire de contact">nous contacter</a></Link>, nous sommes à votre disposition pour vous renseigner.</p>
      </WhiteDiv>
    </section>
  );
}

export default Description;