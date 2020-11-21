import { createGlobalStyle } from 'styled-components';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
  }

  body {
    box-sizing: border-box;
    font-family: 'Tajawal', sans-serif;
    margin: auto;
    overflow-x: hidden;
  }

  h1 {
    font-size: 3.2rem;
    max-width: 800px;
    text-transform: uppercase;
    @media only screen and (max-width: 900px) {
      font-size: 2rem;
    }
  }

  h2 {
    font-size: 1.8rem;
    padding: 30px 6%;
    text-align: center;
    text-transform: uppercase;
    @media only screen and (max-width: 900px) {
      font-size: 1.3rem;
    }
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
    padding-left: 6%;
    padding-right: 6%;
    max-width: 900px;
    text-align: center;
  }

  ul {
    padding: 0 6%;
  }

  li {
    line-height: 1.8rem;
    list-style-position: inside;
    list-style-type: circle;
  }

  hr {
    display: none;
    @media only screen and (max-width: 900px) {
      border: none;
      border-top: 1px solid white;
      display: block;
      margin-top: 30px;
      padding-bottom: 10px;
    }
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