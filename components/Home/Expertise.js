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
`;

const Expertise = () => {
  return (
    <section>
      <WhiteDiv>
        <h2>Notre savoir-faire</h2>
        <p>Nous sommes au service des professionnels, des particuliers, des industries, des collectivités, ainsi que des organismes publics.</p>
        <Container>
          <Services 
            bg="/images/chem-pickling.webp" 
            name="Décapage" 
            page="/decapage" 
            setHeight="350px" 
            setWidth="300px" 
          />
          <Services 
            bg="/images/sablage.webp" 
            name="Sablage" 
            page="/sablage" 
            setHeight="350px" 
            setWidth="300px"
          />
          <Services 
            bg="/images/corrosion.webp" 
            name="Traitement anticorrosion" 
            page="/traitement-anticorrosion" 
            setHeight="350px" 
            setWidth="300px"
          />
          <Services 
            bg="/images/card.webp" 
            name="Thermolaquage" 
            page="/thermolaquage" 
            setHeight="350px" 
            setWidth="300px" 
          />
          <Services 
            bg="/images/liquid.webp" 
            name="Peinture liquide" 
            page="/peinture-liquide" 
            setHeight="350px" 
            setWidth="300px"
          /> 
        </Container>
      </WhiteDiv>
    </section>
  );
}

export default Expertise;