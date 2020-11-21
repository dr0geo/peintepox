import Link from 'next/link';
import { WhiteDiv, DarkDiv } from '@/elements/Divisions';
import Figure from '@/elements/IconFigure';
import { IconsDiv, ServicesContainer } from '@/elements/FlexDiv';
import Services from '@/components/Services';


const Description = () => {
  return (
    <section>
      <WhiteDiv>
        <h2>Les objectifs du décapage</h2>
        <p>Nous redonnons aux ouvrages en métal (fer, acier, inox, cuivre, aluminium, etc...) leur <strong>aspect d’origine</strong>. Pour ce faire, nous enlevons la couche de matière qui s’est déposée à leur surface. Grâce à notre <strong>polyvalence</strong>, nous intervenons sur différents types de supports :</p>
        <IconsDiv>
          <Figure
            name="Façades"
            url="/images/icons/facade.webp"
          />
          <Figure
            name="Meubles"
            url="/images/icons/meuble.webp"
          />
          <Figure
            name="Carrelages"
            url="/images/icons/carrelage.webp"
          />
          <Figure
            name="Carrosserie"
            url="/images/icons/carrosserie.webp"
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
        </IconsDiv>
      </WhiteDiv>
      <DarkDiv>
        <h2>Une technique innovante</h2>
        <p>Nous utilisons des techniques de décapage innovantes afin de redonner aux pièces métalliques, leur apparence d’antan. Les abrasifs que nous utilisons sont <strong>efficaces</strong> et <strong>n’endommagent pas</strong> la surface des ouvrages décapés.</p><br />
        <p><strong>Depuis 1945</strong>, nous avons pris en main de nombreux projets de décapage pour le compte des professionnels, des particuliers, des industries, des collectivités et des organismes publics.</p><br />
      </DarkDiv>
      <WhiteDiv>
        <h2>Retrouvez aussi...</h2>
        <ServicesContainer>
          <Services bg="/images/card.webp" name="Thermolaquage" page="/thermolaquage" />
          <Services bg="/images/fluid.webp" name="Peinture fluide" page="/peinture-fluide" />
          <Services bg="/images/sablage.webp" name="Sablage" page="/sablage" />
          <Services bg="/images/corrosion.webp" name="Traitement anti-corrosion" page="/traitement-anti-corrosion" />
        </ServicesContainer>
        <p>Vous n'êtes pas certain de savoir ce qui correspond le mieux à vos besoins ? N'hésitez pas à <Link href="/contact"><a>nous contacter</a></Link>, nous serons ravis de vous aider.</p>
      </WhiteDiv>
    </section>
  );
}

export default Description;