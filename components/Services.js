import styled from 'styled-components';
import Link from 'next/link';

const Card = styled.div`
  background: url(${props => props.bg}) center no-repeat;
  background-size: cover;
  border-radius: 5px;
  box-shadow: 0 0 2px 2px lightgray;
  height: ${props => props.setHeight ? props.setHeight : '200px'};
  margin: 40px 20px;
  transition: opacity 0.2s ease-in-out;
  width: ${props => props.setWidth ? props.setWidth : '220px'};
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }

`;

const Button = styled.div`
  background-color: #2f2e2e;
  border-radius: 0px 0px 5px 5px;
  color: white;
  padding: 10px 0 6px 0;
  position: relative;
  text-align: center;
  top: ${props => props.setHeight ? `${parseInt(props.setHeight) - 35}px` : '165px'};
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
        <Card bg={props.bg} setHeight={props.setHeight} setWidth={props.setWidth}>
          <Button setHeight={props.setHeight}>{props.name}</Button>
        </Card>
      </a>
    </Link>
  );
}

export default Services;