import styled from 'styled-components';

const Button = styled.button`
  background: #ce2026;
  border: 1px solid #ce2026;
  border-radius: 5px;
  color: white;
  display: block;
  margin: 50px auto;
  padding: 10px 20px;
  transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
  &:hover {
    background: white;
    cursor: pointer;
    color: #ce2026;
  }
  @media only screen and (max-width: 900px) {
    font-size: 1rem;
  }
`;

export default Button;