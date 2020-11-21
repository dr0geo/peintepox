import Link from 'next/link';
import { WhiteDiv } from '@/elements/Divisions';
import { ServicesContainer } from '@/elements/FlexDiv';
import Background from '@/elements/Background';
import Services from '@/components/Services';

const Description = () => {
  const bgUrl = '/images/home.webp';

  return (
    <section>
      <WhiteDiv>
        <h2>Experts en peinture fluide</h2>
        <p>Nous appliquons de la <strong>peinture acrylique</strong> sur des supports en <strong>bois</strong> ou en <strong>métal</strong>. Utilisant un matériel complet, nous possédons <strong>l’expertise</strong> et les <strong>compétences techniques</strong> nous permettant de mener à bien votre projet.</p><br />
        <p>Nous vous proposons également un large choix de <strong>finitions</strong> : mât, brillant, lisse, etc...</p><br />
        <p>Notre <strong>excellente réputation</strong> dans le domaine fait que nous sommes sollicités pour peindre des pièces utilisées dans le secteur <strong>nucléaire</strong> ainsi que dans <strong>l’armement</strong>.</p>
      </WhiteDiv>
      <Background url={bgUrl} />
      <WhiteDiv>
        <h2>Retrouvez aussi...</h2>
        <ServicesContainer>
          <Services 
            bg="/images/card.webp" 
            name="Thermolaquage" 
            page="/thermolaquage"
          />
          <Services 
            bg="/images/sablage.webp" 
            name="Sablage" 
            page="/sablage"
          />
          <Services 
            bg="/images/chem-pickling.webp" 
            name="Décapage" 
            page="/decapage"
          />
          <Services 
            bg="/images/corrosion.webp" 
            name="Traitement anti-corrosion" 
            page="/traitement-anti-corrosion"
          />
        </ServicesContainer>
        <p>Vous n'êtes pas certain de savoir ce qui correspond le mieux à vos besoins ? N'hésitez pas à <Link href="/contact"><a>nous contacter</a></Link>, nous serons ravis de vous aider.</p>
      </WhiteDiv>
    </section>
  );
}

export default Description;