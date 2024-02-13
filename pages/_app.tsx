import type { AppProps } from "next/app";
import Layout from "@/src/components/commons/layout";
import Head from "next/head";
import Settings from "@/src/components/commons/settings";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>OKIMYJ::Frontend Developer</title>
        <meta name="robots" content="noindex,nofollow" charSet="UTF-8" />
        <meta name="description" content="Frontend Developer Portfolio" />
      </Head>
      <Settings>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Settings>
    </>
  );
}
