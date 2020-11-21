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