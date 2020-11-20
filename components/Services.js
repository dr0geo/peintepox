import styled from 'styled-components';
import Link from 'next/link';

const Card = styled.div`
  background: url(${props => props.bg}) center no-repeat;
  background-size: cover;
  border-radius: 5px;
  box-shadow: 0 0 2px 2px lightgray;
  height: ${props => props.height ? props.height : '200px'};
  margin: 0px 20px 60px 20px;
  transition: opacity 0.2s ease-in-out;
  width: ${props => props.width ? props.width : '220px'};
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

const Button = styled.button`
  background-color: #2f2e2e;
  border: none;
  border-radius: 0px 0px 5px 5px;
  color: white;
  padding: 10px 0;
  position: relative;
  top: ${props => props.height ? `${parseInt(props.height) - 37}px` : '163px'};
  transition: opacity 0.2s ease-in-out;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
  @media only screen and (max-width: 900px) {
    font-size: 1rem;
  }
`;

const Services = props => {
  return (
    <Link href={props.page}>
      <a>
        <Card bg={props.bg} height={props.height} width={props.width}>
          <Button height={props.height}>{props.name}</Button>
        </Card>
      </a>
    </Link>
  );
}

export default Services;