import styled from 'styled-components';

const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: auto;
  max-width: 1200px;
  & a {
    border-bottom: none;
  }
  @media only screen and (max-width: 1100px) {
    max-width: 700px;
  }
`;

export default ServicesContainer;