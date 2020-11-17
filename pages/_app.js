import { createGlobalStyle } from 'styled-components';

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
    font-size: 2.2rem;
    max-width: 800px;
  }

  h2 {
    padding: 40px 0;
    text-align: center;
  }

  h3 {
    display: inline-block;
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 2rem;
    margin: 0;
    text-transform: uppercase;
  }

  ion-icon {
    display: inline-block;
    height: 1.2rem;
    padding-right: 8px;
    vertical-align: middle;
    width: 1.2rem;
  }

  a {
    color: black;
    text-decoration: none;
    &:hover {
      cursor: pointer;
    }
  }

  p {
    margin: 0;
    max-width: 800px;
  }
`;

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;