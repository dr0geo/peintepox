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
    font-size: 2rem;
    max-width: 700px;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp