import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  background: url('/images/card.jpeg') center;
  height: 350px;
  margin: 0 20px;
  min-width: 350px;
`;

const Button = styled.button`
  background-color: grey;
  border: none;
  padding: 10px 0;
  position: relative;
  top: 100%;
  width: 100%;
`;

const Expertise = () => {
  return (
    <section>
      <h2>Notre savoir-faire</h2>
      <Container>
        <Card><Button>Thermolaquage</Button></Card>
        <Card><Button>Sablage</Button></Card>
        <Card><Button>Décapage</Button></Card>
        <Card><Button>Traitement anti-corrosion</Button></Card>
      </Container>
    </section>
  );
}

export default Expertise;