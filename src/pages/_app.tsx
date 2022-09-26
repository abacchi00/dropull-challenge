import Head from 'next/head';
import { Global, ThemeProvider } from "@emotion/react";
import { AppProps } from "next/app";

import { globalStyles, theme } from "@/styles";
import "@/styles/fonts.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head><link rel="icon" href="/images/favicon.ico" /></Head>

      <Global styles={globalStyles} />

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
