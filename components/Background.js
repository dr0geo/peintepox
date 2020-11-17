import styled from 'styled-components';

const Background = styled.div`
  background: url(${props => props.url});
  background-attachment: fixed;
  background-size: cover;
  height: 200px;
`;

export default Background;