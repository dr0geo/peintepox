import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="fr">
        <Head>
          {this.props.styleTags}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=block" rel="stylesheet" />
          <meta charSet="utf-8" />
          <link rel="icon" type="image/png" href="/images/logo.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://unpkg.com/ionicons@5.2.3/dist/ionicons.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;