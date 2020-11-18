import styled from 'styled-components';

const PageTitle = styled.div`
  background-image: linear-gradient(0deg, hsla(0, 0%, 0%, 0.6), hsla(0, 0%, 0%, 0.6)), url(${props => props.url});
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  color: white;
  display: flex;
  flex-direction: column;
  height: ${props => props.isHome ? '100vh' : 'auto'};
  justify-content: center;
  margin-bottom: ${props => props.isHome ? '-115px' : 'auto'};
  min-height: 600px;
  padding: 0 6%;
  position: ${props => props.isHome ? 'relative' : 'static'};
  top: -124px;
`;

export default PageTitle;