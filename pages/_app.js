import { createGlobalStyle } from 'styled-components';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-display: swap;
    font-family: 'Tajawal';
    font-weight: 400;
    src: url("/fonts/Tajawal-Regular.woff2") format("woff2");
  }

  @font-face {
    font-display: swap;
    font-family: 'Tajawal';
    font-weight: 300;
    src: url("/fonts/Tajawal-Light.woff2") format("woff2");
  }

  @font-face {
    font-display: swap;
    font-family: 'Tajawal';
    font-weight: 700;
    src:  url("/fonts/Tajawal-Bold.woff2") format("woff2");
  }

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
      font-size: 2.3rem;
    }
  }

  h2 {
    font-size: 1.8rem;
    padding: 20px 3%;
    text-align: center;
    text-transform: uppercase;
    @media only screen and (max-width: 900px) {
      font-size: 1.5rem;
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
    max-width: 900px;
    padding: 5px 3%;
    text-align: center;
    & > a {
      border-bottom: 1px solid black;
    }
  }

  ul {
    padding: 0;
  }

  li {
    line-height: 1.8rem;
    list-style-position: inside;
    list-style-type: circle;
  }

  figcaption {
    max-width: 100px;
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