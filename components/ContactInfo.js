import styled from 'styled-components';
import Link from 'next/link';

const Section = styled.section`
  background-color: #CE2026;
  color: white;
  display: flex;
  font-weight: 300;
  justify-content: center;
  padding: 15px 0;
`;

const Anchor = styled.a`
  border-bottom: 1px solid white;
  color: white;
`;

const StyledDiv = styled.div`
  margin: 10px 0;
  padding: 0 60px;
  width: 17%;
  & + & {
    border-left: 1px solid white;
  }
  & > ion-icon {
    display: inline-block;
    height: 1.2rem;
    padding-right: 8px;
    vertical-align: middle;
    width: 1.2rem;
  }
  & > h3 {
    display: inline-block;
    vertical-align: middle;
  }
  & > p {
    margin-top: 0;
  }
`;

const ContactInfo = () => {
  return (
    <Section>
      <StyledDiv>
        <ion-icon name="call-outline"></ion-icon>
        <h3>Appelez-nous</h3>
        <p>Tel: <Anchor href="tel: +33970351037">09 70 35 10 37</Anchor></p>
      </StyledDiv>
      <StyledDiv>
        <ion-icon name="mail-outline"></ion-icon>
        <h3>Ecrivez-nous</h3>
        <p>Accédez au <Link href='/contact'><Anchor>formulaire</Anchor></Link></p>
      </StyledDiv>
      <StyledDiv>
        <ion-icon name="time-outline"></ion-icon>
        <h3>Horaires d'ouverture</h3>
        <p>Lundi - vendredi : 7:30 - 12:00 & 13:15 - 18:00</p>
      </StyledDiv>
    </Section>
  );
}

export default ContactInfo;