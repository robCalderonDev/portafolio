import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>


          <link rel="icon" type="image/png" href="assets/favicon-rob.png" />
          <link rel="apple-touch-icon" href="assets/apple-touch-icon-rob.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600&family=Sora:wght@500;600;700&display=swap" rel="stylesheet" />
        </Head>


        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
