import styled from 'styled-components';
import { WhiteDiv } from '@/elements/Divisions';
import { ServicesContainer } from '@/elements/FlexDiv';
import Services from '@/components/Services';

const Container = styled(ServicesContainer)`
  justify-content: center;
  @media only screen and (min-width: 1750px) {
    max-width: 100%;
  }
  @media only screen and (max-width: 1100px) {
    max-width: 100%;
  }
}
`;

const Expertise = () => {
  return (
    <section>
      <WhiteDiv>
        <h2>Notre savoir-faire</h2>
        <p>Nous sommes au service des professionnels, des particuliers, des industries, des collectivités, ainsi que des organismes publics.</p>
        <Container>
          <Services 
            bg="/images/card.webp" 
            name="Thermolaquage" 
            page="/thermolaquage" 
            height="350px" 
            width="300px" 
          />
          <Services 
            bg="/images/fluid.webp" 
            name="Peinture fluide" 
            page="/peinture-fluide" 
            height="350px" 
            width="300px"
          />
          <Services 
            bg="/images/sablage.webp" 
            name="Sablage" 
            page="/sablage" 
            height="350px" 
            width="300px"
          />
          <Services 
            bg="/images/chem-pickling.webp" 
            name="Décapage" 
            page="/decapage" 
            height="350px" 
            width="300px" 
          />
          <Services 
            bg="/images/corrosion.webp" 
            name="Traitement anti-corrosion" 
            page="/traitement-anti-corrosion" 
            height="350px" 
            width="300px"
          />
        </Container>
      </WhiteDiv>
    </section>
  );
}

export default Expertise;