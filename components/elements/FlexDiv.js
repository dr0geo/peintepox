import styled from 'styled-components';

export const IconsDiv = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
margin: 20px auto;
max-width: 900px;
& > figure > img {
  display: block;
  height: auto;
  width: 100px;
}
& > figure > figcaption {
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
margin: 30px auto;
max-width: 1200px;
& a {
  border-bottom: none;
}
@media only screen and (max-width: 1100px) {
  max-width: 700px;
}
`;