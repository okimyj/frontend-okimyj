import Head from "next/head";
import LayoutFooter from "./Footer/LayoutFooter.index";
import LayoutHeader from "./Header/LayoutHeader.index";
import LayoutMain from "./Main/LayoutMain.index";
interface ILayoutProps {
  children: React.ReactNode;
}
const Layout = (props: ILayoutProps) => {
  return (
    <>
      <Head>
        <title>OKIMYJ::Frontend Developer</title>
        <meta name="description" content="Frontend Developer Portfolio" />
      </Head>
      <LayoutHeader />
      <LayoutMain>{props.children}</LayoutMain>
      <LayoutFooter />
    </>
  );
};

export default Layout;
