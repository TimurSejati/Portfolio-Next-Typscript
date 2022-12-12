import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="script/script.js" strategy="lazyOnload" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
