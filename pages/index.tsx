import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>OKIMYJ::Frontend Developer</title>
        <meta name="description" content="Frontend Developer Portfolio" />        
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div>
          
        </div>
      </main>
    </>
  );
}
