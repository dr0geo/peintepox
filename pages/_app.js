import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Regular.woff2'),
      url('/fonts/Roboto-Regular.woff');
    font-weight: 400;
    font-display: block;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Bold.woff2'),
      url('/fonts/Roboto-Bold.woff');
    font-weight: 700;
    font-display: block;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Light.woff2'),
      url('/fonts/Roboto-Light.woff');
    font-weight: 300;
    font-display: block;
  }

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
    padding: 30px 0;
    text-align: center;
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
    max-width: 800px;
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
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;