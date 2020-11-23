import Link from 'next/link';
import { WhiteDiv, DarkDiv } from '@/elements/Divisions';
import { IconsDiv } from '@/elements/FlexDiv';
import { ServicesContainer } from '@/elements/FlexDiv';
import Figure from '@/elements/IconFigure';
import Gallery from '@/elements/Gallery';
import Services from '@/components/Services';


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
    <section>
      <WhiteDiv>
        <h2>Application d’une poudre sans solvant et sans composant toxique</h2>
        <p>Nous appliquons des poudres époxy, <strong>sans solvant</strong> sur des métaux ferreux et non ferreux :</p>
        <IconsDiv>
          <Figure
            name="Fer"
            url="/images/icons/thermolaquage/Fer.webp"
          />
          <Figure
            name="Cuivre"
            url="/images/icons/thermolaquage/Cu.webp"
          />
          <Figure
            name="Aluminium"
            url="/images/icons/thermolaquage/Al.webp"
          />
          <Figure
            name="Inox"
            url="/images/icons/thermolaquage/inox.webp"
          />
          <Figure
            name="Laiton"
            url="/images/icons/thermolaquage/laiton.webp"
          />
          <Figure
            name="Alliage"
            url="/images/icons/thermolaquage/alliage.webp"
          />
        </IconsDiv>
        <p><strong>Perfectionnistes</strong>, nous accordons une grande importance aux finitions. Outre le thermolaquage, le <Link href="/traitement-anti-corrosion"><a title="Découvrez nos prestations de traitement anti-corrosion">traitement anti-corrosion</a></Link> figure aussi parmi nos prestations. Nous proposons nos services aux particuliers, aux industries, aux collectivités et aux organismes publics en région parisienne. Nous travaillons également pour l’Armée Française.</p>
      </WhiteDiv>
      <Gallery images={thermoImages} />
      <DarkDiv>
        <h2>Les avantages du thermolaquage</h2>
        <p>Le thermolaquage est une technique de <strong>traitement de surface</strong>. Elle offre un large panel de couleurs, d’effets (métallisé, texturé, sablé…) et de finitions.</p><br />
        <p>Plus <strong>économique</strong> et <strong>écologique</strong> que la peinture industrielle, ce procédé par une polymérisation à 180° permet de raccourcir les délais de réalisation en supprimant les temps de séchages.</p><br />
        <p>Maîtrisant parfaitement toutes les étapes de cette opération, nous vous garantissons un résultat alliant <strong>esthétique</strong>, <strong>résistance</strong> et <strong>durabilité</strong>.</p><br />
      </DarkDiv>
      <WhiteDiv>
        <h2>Retrouvez aussi...</h2>
        <ServicesContainer>
          <Services bg="/images/chem-pickling.webp" name="Décapage" page="/decapage" />
          <Services bg="/images/sablage.webp" name="Sablage" page="/sablage" />
          <Services bg="/images/corrosion.webp" name="Traitement anti-corrosion" page="/traitement-anti-corrosion" />
          <Services bg="/images/liquid.webp" name="Peinture liquide" page="/peinture-liquide" />
        </ServicesContainer>     
        <p>Vous n'êtes pas certain de savoir ce qui correspond le mieux à vos besoins ? N'hésitez pas à <Link href="/contact"><a title="Accédez au formulaire de contact">nous contacter</a></Link>, nous sommes à votre disposition pour vous renseigner.</p>
      </WhiteDiv>
    </section>
  );
}

export default Description;