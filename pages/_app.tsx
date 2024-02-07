import { Global, ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { globalStyles } from "../src/styles/globalStyles";
import Layout from "@/src/components/layout";
import { theme } from "@/src/styles/theme";
import Head from "next/head";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Gowun+Dodum:wght@100;400;500;700;800&display=swap"
          rel="stylesheet"
        /> */}
        <Global styles={globalStyles} />
        <Head>
          <title>OKIMYJ::Frontend Developer</title>
          <meta name="description" content="Frontend Developer Portfolio" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </RecoilRoot>
  );
}
