import styled from 'styled-components';

const Section = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
`;
const Companies = styled.img`
  display: block;
  height: 80px;
  margin: 0 30px;
  width: 80px;
`;

const References = () => {
  return (
    <Section>
      <h2>Pourquoi travailler avec nous ?</h2>
      <p>Notre travail consiste à appliquer de la poudre thermodurcissable sur des métaux ferreux. Nous pouvons intervenir sur d’autres supports en bois, en acier et en plastique pour des travaux de masticage, de ponçage et de peinture.</p>
      <br />
      <p>Nous disposons d’un atelier bien équipé et d'une équipe expérimentée pour répondre à vos besoins.</p>
      <br />
      <p>Nos délais de réalisation sont courts et respectés.</p>
      <br />
      <p>Nous vous garantissons un résultat précis et fiable.</p>
      <h2>Ils nous ont fait confiance</h2>
      <Container>
        <Companies src="" alt="" />
        <Companies src="" alt="" />
        <Companies src="" alt="" />
        <Companies src="" alt="" />
        <Companies src="" alt="" />
        <Companies src="" alt="" />
      </Container>
    </Section>
  );
}

export default References;