import styled from 'styled-components';
import Link from 'next/link';
import { WhiteDiv } from '@/elements/Divisions';
import Figure from '@/elements/IconFigure';
import { IconsDiv, ServicesContainer } from '@/elements/FlexDiv';
import Background from '@/elements/Background';
import Services from '@/components/Services';

const SpecialIconsDiv = styled(IconsDiv)`
  max-width: 1000px;
  @media only screen and (max-width: 900px) {
    max-width: 530px;
  }
`;

const SpecialWhiteDiv = styled(WhiteDiv)`
  @media only screen and (max-width: 900px) {
    margin-top: -20px;
    padding-top: 0;
  }
`;

const Description = () => {
  const bgUrl = '/images/decapage.webp';

  return (
    <section>
      <WhiteDiv>
        <h2>Les objectifs du décapage</h2>
        <p>Nous redonnons aux ouvrages en métal (fer, acier, inox, cuivre, aluminium, etc...) leur <strong>aspect brut</strong>. Ce traitement par immersion est indispensable pour retirer la peinture existante. Grâce à notre <strong>polyvalence</strong>, nous intervenons sur différents types de supports :</p>
        <SpecialIconsDiv>
          <Figure
            name="Radiateurs"
            url="/images/icons/radiateur.webp"
          />
          <Figure
            name="Meubles"
            url="/images/icons/meuble.webp"
          />
          <Figure
            name="Pièces industrielles"
            url="/images/icons/industriel.webp"
          />
          <Figure
            name="Persiennes"
            url="/images/icons/persienne.webp"
          />
          <Figure
            name="Jantes"
            url="/images/icons/jante.webp"
          />
          <Figure
            name="Portails"
            url="/images/icons/portail.webp"
          />
          <Figure
            name="Garde-corps"
            url="/images/icons/garde-corps.webp"
          />
          <Figure
            name="Volets"
            url="/images/icons/volet.webp"
          />
          <Figure
            name="Mobilier de jardin"
            url="/images/icons/jardin.webp"
          />
          <Figure
            name="Mobilier urbain"
            url="/images/icons/urbain.webp"
          />
        </SpecialIconsDiv>
        <p><strong>Depuis 1945</strong>, nous avons pris en main de nombreux projets de décapage pour le compte de professionnels, de particuliers, d'industries, de collectivités et d'organismes publics.</p>
      </WhiteDiv>
      <Background url={bgUrl} />
      <SpecialWhiteDiv>
        <h2>Retrouvez aussi...</h2>
        <ServicesContainer>
          <Services bg="/images/sablage.webp" name="Sablage" page="/sablage" />
          <Services bg="/images/anticorrosion.webp" name="Traitement anticorrosion" page="/traitement-anticorrosion" />
          <Services bg="/images/thermolaquage.webp" name="Thermolaquage" page="/thermolaquage" />
          <Services bg="/images/peinture-liquide.webp" name="Peinture liquide" page="/peinture-liquide" />
        </ServicesContainer>
        <p>Vous n'êtes pas certain de savoir ce qui correspond le mieux à vos besoins ? N'hésitez pas à <Link href="/contact"><a title="Accédez au formulaire de contact">nous contacter</a></Link>, nous sommes à votre disposition pour vous renseigner.</p>
      </SpecialWhiteDiv>
    </section>
  );
}

export default Description;