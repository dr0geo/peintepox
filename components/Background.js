import styled from 'styled-components';

const Background = styled.div`
  background: url(${props => props.url});
  background-attachment: fixed;
  background-size: cover;
  height: 250px;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export default Background;