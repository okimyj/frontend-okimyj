import Head from "next/head";
import LayoutFooter from "./Footer/LayoutFooter.index";
import LayoutHeader from "./Header/LayoutHeader.index";
import HeaderNavigation from "./Header/Navigation/HeaderNavigation.index";
import LayoutMain from "./Main/LayoutMain.index";
import { Gowun_Dodum } from "next/font/google";
const gowunDodum = Gowun_Dodum({
  weight: "400",
  subsets: ["latin"],
});
interface ILayoutProps {
  children: JSX.Element | JSX.Element[];
}
const Layout = (props: ILayoutProps) => {
  return (
    <div className={gowunDodum.className}>
      <Head>
        <title>OKIMYJ::Frontend Developer</title>
        <meta name="description" content="Frontend Developer Portfolio" />
      </Head>
      <LayoutHeader />
      <LayoutMain>{props.children}</LayoutMain>
      <LayoutFooter />
    </div>
  );
};

export default Layout;
