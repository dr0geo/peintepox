import styled from 'styled-components';

const PageTitle = styled.div`
  background: url(${props => props.url}) center;
  background-attachment: fixed;
  background-size: cover;
  color: white;
  display: flex;
  flex-direction: column;
  height: 600px;
  justify-content: center;
  padding: 0 6%;
`;

export default PageTitle;