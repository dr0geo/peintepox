import Link from 'next/link';
import { WhiteDiv, DarkDiv } from '@/elements/Divisions';
import { IconsDiv, ServicesContainer } from '@/elements/FlexDiv';
import Figure from '@/elements/IconFigure';
import Services from '@/components/Services';

const Description = () => {
  return (
    <section>
      <WhiteDiv>
        <h2>Un procédé de traitement de surface efficace</h2>
        <p>Nous nettoyons toutes sortes d’ouvrages en <strong>métal</strong>, en <strong>fonte</strong> et en <strong>inox</strong> via la technique de projection de corindon. Notre travail consiste à <strong>désoxyder</strong> et à <strong>décalaminer</strong> la surface des matériaux par projection sous pression de corindon. Cette opération permet d'assurer une bonne tenue des traitements de surface à suivre.</p><br />
        <p>Nos prestations de sablage sont proposées à des <strong>tarifs attractifs</strong>.</p><br />
        <p>Depuis des années, de nombreux professionnels, particuliers, collectivités, industries et organismes publics nous ont confié leur projet.</p>
      </WhiteDiv>
      <DarkDiv>
        <h2>Pièces de toutes dimensions</h2>
        <p>Nous possédons la <strong>main-d’œuvre qualifée</strong> et une cabine de <strong>5 x 5 mètres</strong> afin d'effectuer le sablage des ouvrages de petites et de grandes dimensions.</p><br />
        <p>Sollicitez nos services pour le sablage de vos :</p>
        <IconsDiv>
          <Figure
            name="Fonderies"
            url="/images/icons/fonderie.webp"
          />
          <Figure
            name="Radiateurs"
            url="/images/icons/radiateur.webp"
          />
          <Figure
            name="Grilles"
            url="/images/icons/grille.webp"
          />
          <Figure
            name="Persiennes"
            url="/images/icons/persienne.webp"
          />
          <Figure
            name="Portails"
            url="/images/icons/portail.webp"
          />
          <Figure
            name="Garde-corps"
            url="/images/icons/garde-corps.webp"
          />
        </IconsDiv>
      </DarkDiv>
      <WhiteDiv>
        <h2>Retrouvez aussi...</h2>
        <ServicesContainer>
          <Services bg="/images/chem-pickling.webp" name="Décapage" page="/decapage" />
          <Services bg="/images/corrosion.webp" name="Traitement anti-corrosion" page="/traitement-anti-corrosion" />
          <Services bg="/images/card.webp" name="Thermolaquage" page="/thermolaquage" />
          <Services bg="/images/liquid.webp" name="Peinture liquide" page="/peinture-liquide" />
        </ServicesContainer>
        <p>Vous n'êtes pas certain de savoir ce qui correspond le mieux à vos besoins ? N'hésitez pas à <Link href="/contact"><a title="Accédez au formulaire de contact">nous contacter</a></Link>, nous sommes à votre disposition pour vous renseigner.</p>
      </WhiteDiv>
    </section>
  );
}

export default Description;