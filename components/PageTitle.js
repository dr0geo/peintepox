import styled from 'styled-components';

const PageTitle = styled.div`
  background-attachment: fixed;
  background-image: 
    linear-gradient(0deg, hsla(0, 0%, 0%, 0.75), hsla(0, 0%, 0%, 0.75)), 
    url(${props => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  display: flex;
  flex-direction: column;
  height: ${props => props.isHome ? '100vh' : 'auto'};
  justify-content: center;
  margin-bottom: ${props => props.isHome ? '-125px' : 'auto'};
  min-height: 650px;
  padding-left: 10%;
  position: ${props => props.isHome ? 'relative' : 'static'};
  top: -135px;
  & > p {
    max-width: 600px;
    padding: 5px 0;
    text-align: left;
  }
  @media only screen and (max-width: 900px) {
    background-attachment: scroll;
    background-position: top 80px center;
    height: 100vh;
    margin-bottom: ${props => props.isHome ? '-72px' : '-110px'};
    padding-left: 3%;
    padding-right: 3%;
    position: relative;
    & > h1, & > p {
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }
  }
`;

export default PageTitle;