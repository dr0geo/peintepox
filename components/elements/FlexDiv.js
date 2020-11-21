import styled from 'styled-components';

export const IconsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 20px auto;
  max-width: 850px;
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
  @media only screen and (max-width: 720px) {
    max-width: 530px;
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