import styled from 'styled-components';
import Services from '@/components/Services';

const Paragraph = styled.p`
  margin: 0 auto 50px auto;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  padding-bottom: 50px;
  max-width: 1350px;
  @media only screen and (min-width: 1750px) {
    max-width: 100%;
  }
}
`;

const Expertise = () => {
  return (
    <section>
      <h2>Notre savoir-faire</h2>
      <Paragraph>Nous sommes au service des professionnels, des particuliers, des industries, des collectivités, ainsi que des organismes publics.</Paragraph>
      <Container>
        <Services 
          bg="/images/card.webp" 
          name="Thermolaquage" 
          page="/thermolaquage" 
          height="320px" 
          width="300px" 
        />
        <Services 
          bg="/images/fluid.webp" 
          name="Peinture fluide" 
          page="/peinture-fluide" 
          height="320px" 
          width="300px"
        />
        <Services 
          bg="/images/sablage.webp" 
          name="Sablage" 
          page="/sablage" 
          height="320px" 
          width="300px"
        />
        <Services 
          bg="/images/chem-pickling.webp" 
          name="Décapage" 
          page="/decapage" 
          height="320px" 
          width="300px" 
        />
        <Services 
          bg="/images/corrosion.webp" 
          name="Traitement anti-corrosion" 
          page="/traitement-anti-corrosion" 
          height="320px" 
          width="300px"
        />
      </Container>
    </section>
  );
}

export default Expertise;