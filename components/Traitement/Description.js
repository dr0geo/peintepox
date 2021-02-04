import styled from 'styled-components';
import Link from 'next/link';
import { WhiteDiv, DarkDiv } from '@/elements/Divisions';
import { IconsDiv, ServicesContainer } from '@/elements/FlexDiv';
import Figure from '../elements/IconFigure';
import Services from '@/components/Services';

const SpecialIconsDiv = styled(IconsDiv)`
  margin-bottom: 15px;
  max-width: 1000px;
  & > figure {
    align-items: center;
    display: flex;
    flex-direction: column;
    min-width: 250px;
    & > img {
      align-self: center;
    }
    & > figcaption {
      max-width: 250px;
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
        <p>Pour protéger les pièces métalliques <strong>contre la corrosion</strong>, nous appliquons après sablage un primaire époxy thermodurcissable spécialement conçu par nos fournisseurs pour faire <strong>barrière à l’oxydation</strong>.</p>
      </WhiteDiv>
      <DarkDiv>
        <h2>Étapes du traitement anticorrosion</h2>
        <p>Nous <strong>maîtrisons parfaitement</strong> les différentes étapes du traitement anticorrosion des métaux :</p>
        <SpecialIconsDiv>
          <Figure 
            name="Dégraissage et préparation du support par sablage"
            url="/images/icons/traitement/nettoyage.webp"
          />
          <Figure 
            name="Application du primaire (polyzinc) contre la rouille"
            url="/images/icons/traitement/rouille.webp"
          />
          <figure>
            <img src="/images/icons/traitement/thermolaquage.webp" alt="Thermolaquage" loading="lazy" />
            <figcaption><em><Link href="/thermolaquage"><a title="Découvrez nos prestations de thermolaquage">Thermolaquage</a></Link></em></figcaption>
          </figure>
        </SpecialIconsDiv>
        <p>Quelles que soient la forme, les dimensions et les caractéristiques de la pièce métallique à traiter, nous n’avons qu’un seul objectif : <strong>prévenir la rouille</strong>.</p><br />
      </DarkDiv>
      <WhiteDiv>
        <h2>Retrouvez aussi...</h2>
        <ServicesContainer>
          <Services bg="/images/decapage.webp" name="Décapage" page="/decapage" />
          <Services bg="/images/sablage.webp" name="Sablage" page="/sablage" />
          <Services bg="/images/thermolaquage.webp" name="Thermolaquage" page="/thermolaquage" />
          <Services bg="/images/peinture-liquide.webp" name="Peinture liquide" page="/peinture-liquide" />
        </ServicesContainer>
        <p>Vous n'êtes pas certain de savoir ce qui correspond le mieux à vos besoins ? N'hésitez pas à <Link href="/contact"><a title="Accédez au formulaire de contact">nous contacter</a></Link>, nous sommes à votre disposition pour vous renseigner.</p>
      </WhiteDiv>
    </section>
  );
}

export default Description;