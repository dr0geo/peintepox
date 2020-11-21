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
        <p>Nous nettoyons toutes sortes d’ouvrages en <strong>métal</strong> et en <strong>bois</strong> via la technique de projection de sable. Notre travail consiste à désoxyder et à désencrasser la surface du matériau afin qu’il retrouve son aspect d’origine et ses couleurs.</p><br />
        <p>Nos prestations de sablage sont proposées à des <strong>tarifs attractifs</strong>. Sur votre demande, nous effectuons également des travaux de <Link href="/peinture-fluide"><a title="Découvrez nos prestations de peinture fluide">peinture fluide</a></Link>.</p><br />
        <p>Depuis des années, de nombreux professionnels, particuliers, collectivités, industries et organismes publics nous ont confié leur projet.</p>
      </WhiteDiv>
      <DarkDiv>
        <h2>Pièces de toutes dimensions</h2>
        <p>Nous possédons la <strong>main-d’œuvre qualifée</strong> et une cabine de <strong>5 x 5 mètres</strong> afin d'effectuer le sablage des ouvrages de petites et de grandes dimensions.</p><br />
        <p>Sollicitez nos services pour le sablage de vos :</p>
        <IconsDiv>
          <Figure
            name="Meubles"
            url="/images/icons/meuble.webp"
          />
          <Figure
            name="Façades"
            url="/images/icons/facade.webp"
          />
          <Figure
            name="Poutres"
            url="/images/icons/poutre.webp"
          />
          <Figure
            name="Grilles"
            url="/images/icons/grille.webp"
          />
          <Figure
            name="Pièces auto"
            url="/images/icons/jante.webp"
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
            name="Barrières"
            url="/images/icons/garde-corps.webp"
          />
        </IconsDiv>
      </DarkDiv>
      <WhiteDiv>
        <h2>Retrouvez aussi...</h2>
        <ServicesContainer>
          <Services bg="/images/card.webp" name="Thermolaquage" page="/thermolaquage" />
          <Services bg="/images/fluid.webp" name="Peinture fluide" page="/peinture-fluide" />
          <Services bg="/images/chem-pickling.webp" name="Décapage" page="/decapage" />
          <Services bg="/images/corrosion.webp" name="Traitement anti-corrosion" page="/traitement-anti-corrosion" />
        </ServicesContainer>
        <p>Vous n'êtes pas certain de savoir ce qui correspond le mieux à vos besoins ? N'hésitez pas à <Link href="/contact"><a>nous contacter</a></Link>, nous serons ravis de vous aider.</p>
      </WhiteDiv>
    </section>
  );
}

export default Description;