// _document.tsx

import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Script
          strategy="beforeInteractive"
          src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=ad9d343d6a6cebaac782de9714010cc7&autoload=false"
          crossOrigin="anonymous"
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
