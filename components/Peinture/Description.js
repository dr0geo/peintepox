import styled from 'styled-components';
import Link from 'next/link';
import { WhiteDiv } from '@/elements/Divisions';
import { ServicesContainer } from '@/elements/FlexDiv';
import Background from '@/elements/Background';
import Services from '@/components/Services';

const SpecialWhiteDiv = styled(WhiteDiv)`
  @media only screen and (max-width: 900px) {
    margin-top: -20px;
    padding-top: 0;
  }
`;

const Description = () => {
  const bgUrl = '/images/peinture.webp';

  return (
    <section>
      <WhiteDiv>
        <h2>Experts en peinture liquide</h2>
        <p>Nous appliquons de la <strong>peinture appropriée</strong> sur des pièces en <strong>bois</strong>, en <strong>médium</strong> ou en <strong>plastique</strong>. Utilisant un matériel complet, nous possédons <strong>l’expertise</strong> et les <strong>compétences techniques</strong> nous permettant de mener à bien votre projet.</p><br />
        <p>Nous vous proposons également un large choix de <strong>finitions</strong> : mat, satiné, lisse, etc...</p><br />
        <p>Notre <strong>savoir-faire</strong> dans le domaine fait que nous sommes sollicités pour peindre des pièces utilisées dans le secteur <strong>aéronautique</strong> ainsi que dans <strong>l’armement</strong>.</p>
      </WhiteDiv>
      <Background url={bgUrl} />
      <SpecialWhiteDiv>
        <h2>Retrouvez aussi...</h2>
        <ServicesContainer>
          <Services 
            bg="/images/decapage.webp" 
            name="Décapage" 
            page="/decapage"
          />
          <Services 
            bg="/images/sablage.webp" 
            name="Sablage" 
            page="/sablage"
          />
          <Services 
            bg="/images/anticorrosion.webp" 
            name="Traitement anticorrosion" 
            page="/traitement-anticorrosion"
          />
          <Services 
            bg="/images/thermolaquage.webp" 
            name="Thermolaquage" 
            page="/thermolaquage"
          />
        </ServicesContainer>
        <p>Vous n'êtes pas certain de savoir ce qui correspond le mieux à vos besoins ? N'hésitez pas à <Link href="/contact"><a title="Accédez au formulaire de contact">nous contacter</a></Link>, nous sommes à votre disposition pour vous renseigner.</p>
      </SpecialWhiteDiv>
    </section>
  );
}

export default Description;