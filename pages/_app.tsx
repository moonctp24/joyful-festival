import "@/styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";

import Layout from "@/components/layout/Layout";
import store from "@/store";
import CommModalGroup from "@/components/popup/CommModalGroup";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="@/public/joyfun-festival-icon.png" />
        <title>joyful-festival</title>
      </Head>
      <Provider store={store}>
        <CommModalGroup />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
