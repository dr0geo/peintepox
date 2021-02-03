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
    url: '/images/thermolaquage/thermo1.webp'
  },
  {
    id: 'thermo2',
    url:'/images/thermolaquage/thermo2.webp'
  },
  {
    id: 'thermo3',
    url: '/images/thermolaquage/thermo3.webp'
  },
  {
    id: 'thermo4',
    url: '/images/thermolaquage/thermo4.webp'
  },
  {
    id: 'thermo5',
    url: '/images/thermolaquage/thermo5.webp'
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
        <p><strong>Perfectionnistes</strong>, nous accordons une grande importance aux finitions. Outre le thermolaquage, le <Link href="/traitement-anticorrosion"><a title="Découvrez nos prestations de traitement anticorrosion">traitement anticorrosion</a></Link> figure aussi parmi nos prestations. Nous proposons nos services aux particuliers, aux industries, aux collectivités et aux organismes publics en région parisienne. Nous travaillons également pour l’Armée Française.</p>
      </WhiteDiv>
      <Gallery images={thermoImages} />
      <DarkDiv>
        <h2>Les avantages du thermolaquage</h2>
        <p>Le thermolaquage est une technique de <strong>traitement de surface</strong>. Elle offre un large panel de couleurs, d’effets (métallisé, texturé, sablé…) et de finitions.</p><br />
        <p>Plus <strong>économique</strong> et <strong>écologique</strong> que la peinture industrielle, ce procédé par une polymérisation à 180° permet de raccourcir les délais de réalisation en supprimant les temps de séchage.</p><br />
        <p>Maîtrisant parfaitement toutes les étapes de cette opération, nous vous garantissons un résultat alliant <strong>esthétique</strong>, <strong>résistance</strong> et <strong>durabilité</strong>.</p><br />
      </DarkDiv>
      <WhiteDiv>
        <h2>Retrouvez aussi...</h2>
        <ServicesContainer>
          <Services bg="/images/decapage.webp" name="Décapage" page="/decapage" />
          <Services bg="/images/sablage.webp" name="Sablage" page="/sablage" />
          <Services bg="/images/corrosion.webp" name="Traitement anticorrosion" page="/traitement-anticorrosion" />
          <Services bg="/images/liquid.webp" name="Peinture liquide" page="/peinture-liquide" />
        </ServicesContainer>     
        <p>Vous n'êtes pas certain de savoir ce qui correspond le mieux à vos besoins ? N'hésitez pas à <Link href="/contact"><a title="Accédez au formulaire de contact">nous contacter</a></Link>, nous sommes à votre disposition pour vous renseigner.</p>
      </WhiteDiv>
    </section>
  );
}

export default Description;