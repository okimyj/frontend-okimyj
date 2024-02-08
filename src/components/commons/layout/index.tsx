import Head from "next/head";
import LayoutFooter from "./Footer/LayoutFooter.index";
import LayoutHeader from "./Header/LayoutHeader.index";
import LayoutMain from "./Main/LayoutMain.index";
import { useRecoilState } from "recoil";
import { screenSizeState } from "@/src/commons/stores";
import { useEffect } from "react";
interface ILayoutProps {
  children: JSX.Element | JSX.Element[];
}
const Layout = (props: ILayoutProps) => {
  const [, setScreenSize] = useRecoilState(screenSizeState);
  const onResizeWindow = () => {
    setScreenSize({ width: window.screen.width, height: window.screen.height });
  };

  useEffect(() => {
    onResizeWindow();
    window.addEventListener("resize", onResizeWindow);
    return () => {
      window.removeEventListener("resize", onResizeWindow);
    };
  }, []);
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
