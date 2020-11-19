import { createGlobalStyle } from 'styled-components';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
  }

  body {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    margin: auto;
  }

  h1 {
    font-size: 2.8rem;
    max-width: 800px;
    text-transform: uppercase;
  }

  h2 {
    padding: 30px 0;
    text-align: center;
    text-transform: uppercase;
  }

  h3 {
    display: inline-block;
    font-size: 1.2rem;
    font-weight: 300;
    margin: 10px 0;
    text-transform: uppercase;
  }

  h4 {
    margin-bottom: 0;
    margin-top: 30px;
  }

  a {
    color: black;
    text-decoration: none;
    &:hover {
      cursor: pointer;
    }
  }

  p {
    line-height: 1.5rem;
    max-width: 900px;
  }

  ul {
    padding: 0;
  }

  li {
    line-height: 1.8rem;
    list-style-position: inside;
    list-style-type: circle;
  }
`;

const MyApp = ({ Component, pageProps }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => setIsClicked(() => !isClicked);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} isClicked={isClicked} handleClick={handleClick} />
    </>
  );
}

export default MyApp;