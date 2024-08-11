import "@/styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="@/public/joyfun-festival-icon.png" />
        <title>joyful-festival</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
