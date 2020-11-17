import styled from 'styled-components';

const PageTitle = styled.div`
  background-image: linear-gradient(0deg, hsla(0, 0%, 0%, 0.6), hsla(0, 0%, 0%, 0.6)), url(${props => props.url});
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  color: white;
  display: flex;
  flex-direction: column;
  height: 600px;
  justify-content: center;
  padding: 0 6%;
`;

export default PageTitle;