import styled from 'styled-components';
import Link from 'next/link';

const Section = styled.section`
  background-color: #CE2026;
  color: white;
  display: flex;
  font-weight: 300;
  justify-content: center;
  margin-bottom: ${props => props.isHome ? '-117px' : 'auto'};
  padding: 15px 0;
  position: ${props => props.isHome ? 'relative' : 'static'};
  top: -117px;
  @media only screen and (max-width: 900px) {
    align-items: center;
    flex-direction: column;
    padding-top: 20px;
  }
`;

const Anchor = styled.a`
  border-bottom: 1px solid white;
  color: white;
`;

const StyledDiv = styled.div`
  margin: 10px 0;
  min-width: 250px;
  padding: 0 60px;
  width: 17%;
  & + & {
    border-left: 1px solid white;
  }
  & > ion-icon {
    display: inline-block;
    height: 20px;
    padding-right: 8px;
    position: relative;
    top: 3px;
    width: 20px;
  }
  & > h3 {
    display: inline-block;
    vertical-align: middle;
  }
  & > p {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    text-align: left;
    @media only screen and (max-width: 900px) {
      text-align: center;
    }
  }
  @media only screen and (max-width: 1100px) {
    padding: 0 25px;
  }
  @media only screen and (max-width: 900px) {
    margin: 0;
    padding: 0 10px;
    text-align: center;
    width: 80%;
    & + & {
      border-left: none;
    }
  }
`;

const ContactInfo = props => {
  return (
    <Section isHome={props.isHome}>
      <StyledDiv>
        <ion-icon name="call-outline"></ion-icon>
        <h3>Appelez-nous</h3>
        <p>Tel: <Anchor href="tel:+33146540324">01 46 54 03 24</Anchor></p>
        <hr />
      </StyledDiv>
      <StyledDiv>
        <ion-icon name="mail-outline"></ion-icon>
        <h3>Ecrivez-nous</h3>
        <p>Accédez au <Link href='/contact' passHref><Anchor>formulaire</Anchor></Link></p>
        <hr />
      </StyledDiv>
      <StyledDiv>
        <ion-icon name="time-outline"></ion-icon>
        <h3>Horaires d'ouverture</h3>
        <p>Lun - ven : 7:30 - 12:00 & 13:15 - 18:00</p>
      </StyledDiv>
    </Section>
  );
}

export default ContactInfo;