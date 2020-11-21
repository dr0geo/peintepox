import styled, { keyframes } from 'styled-components';

const translate = keyframes`
  0%, 20% {
    transform: translateX(0);
  }
  25%, 45% {
    transform: translateX(-610px);
  }
  50%, 70% {
    transform: translateX(-1220px);
  }
  75%, 95% {
    transform: translateX(-1830px);
  }
  100% {
    transform: translateX(-2440px);
  }
`;

const Wrapper = styled.aside`
  margin: 0px auto 60px auto;
  max-width: 1100px;
  overflow: hidden;
`;

const List = styled.ul`
  animation: ${translate} 18s ease-in-out infinite;
  display: flex;
  padding: 0;
  & > li {
    list-style-type: none;
    margin-right: 10px;
    & > img {
    display: block;
    height: 400px;
    width: 600px;
    }
  }
  @media only screen and (min-width: 900px) {
    &:hover {
    animation-play-state: paused;
    }
  }
`;

const Gallery = props => {
  return (
    <Wrapper>
      <List>
        {props.images.map(image => <li key={image.id}><img src={image.url} alt={image.id} /></li>)}
        <li key={props.images[0].id}><img src={props.images[0].url} alt={props.images[0].id} /></li>
        <li key={props.images[1].id}><img src={props.images[1].url} alt={props.images[1].id} /></li>
      </List>
    </Wrapper>
  );
}

export default Gallery;