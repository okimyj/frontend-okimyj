import LayoutFooter from "./Footer/LayoutFooter.index";
import LayoutHeader from "./Header/LayoutHeader.index"
import LayoutNavigation from "./Navigation/LayoutNavigation.index";

interface ILayoutProps {
  children : JSX.Element | JSX.Element[]
}
const Layout = (props:ILayoutProps)=>{
  return (
    <>
      <LayoutHeader/>
      <LayoutNavigation/>
      <main>
        {props.children}
      </main>
      <LayoutFooter/>
    </>
  );
};

export default Layout;