import styled, { keyframes } from 'styled-components';

const translate = keyframes`
  0%, 15% {
    transform: translateX(0);
  }
  20%, 35% {
    transform: translateX(-610px);
  }
  40%, 55% {
    transform: translateX(-1220px);
  }
  60%, 75% {
    transform: translateX(-1830px);
  }
  80%, 95% {
    transform: translateX(-2440px);
  }
  100% {
    transform: translateX(-3050px);
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
        {props.images.map(image => <li key={image.id}><img src={image.url} alt={image.id} loading="lazy" /></li>)}
        <li key={props.images[0].id}><img src={props.images[0].url} alt={props.images[0].id} loading="lazy" /></li>
        <li key={props.images[1].id}><img src={props.images[1].url} alt={props.images[1].id} loading="lazy" /></li>
      </List>
    </Wrapper>
  );
}

export default Gallery;