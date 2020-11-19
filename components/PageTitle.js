import styled from 'styled-components';

const PageTitle = styled.div`
  background-attachment: fixed;
  background-image: linear-gradient(0deg, hsla(0, 0%, 0%, 0.75), hsla(0, 0%, 0%, 0.75)), url(${props => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  display: flex;
  flex-direction: column;
  height: ${props => props.isHome ? '100vh' : 'auto'};
  justify-content: center;
  margin-bottom: ${props => props.isHome ? '-115px' : 'auto'};
  min-height: 650px;
  position: ${props => props.isHome ? 'relative' : 'static'};
  top: -124px;
  & > h1 {
    padding: 0 6%;
  }
  & > p {
    max-width: 600px;
  }
  @media only screen and (max-width: 900px) {
    background-attachment: scroll;
    background-position: top 80px;
    height: 100vh;
    margin-bottom: ${props => props.isHome ? '-72px' : '-110px'};
    position: relative;
  }
`;

export default PageTitle;