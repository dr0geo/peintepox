import styled from 'styled-components';

export const IconsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 20px auto;
  max-width: 700px;
  & > figure {
    padding: 15px 0;
  }
  & > figure > img {
    display: block;
    width: 100px;
  }
  & > figure > figcaption {
    margin-top: 15px;
    text-align: center;
  }
`;

export const ServicesContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: auto;
  max-width: 1350px;
  & a {
    border-bottom: none;
  }
`;