import "@/styles/globals.css";
import { Global, ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { globalStyles } from '../src/commons/styles/globalStyles';
import Layout from "@/src/commons/layout";
import { theme } from "@/src/commons/styles/theme";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles}/>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </RecoilRoot>
  );
}
