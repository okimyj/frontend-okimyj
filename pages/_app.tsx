import "@/styles/globals.css";
import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { globalStyles } from '../src/commons/styles/globalStyles';
import Layout from "@/src/commons/layout";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Global styles={globalStyles}/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}
