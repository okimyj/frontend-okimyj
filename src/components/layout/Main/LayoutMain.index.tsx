import { Wrapper } from "./LayoutMain.styles";
interface ILayoutMain {
  children: JSX.Element | JSX.Element[];
}
const LayoutMain = (props: ILayoutMain) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default LayoutMain;
