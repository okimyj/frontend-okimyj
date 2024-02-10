import { Ref, useState } from "react";
import { NavItem, NavItemActive, NavWrapper, Wrapper } from "./Navigation.styles";
const NAV_MENUS = [
  { index: 1, name: "About Me" },
  { index: 2, name: "Work" },
];
interface INaviMenu {
  name: string;
  ref: Ref<React.JSX.Element>;
}
interface INavigationProps {
  activeIndex: number;
  menus: INaviMenu[];
}
const Navigation = (props: INavigationProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(props.activeIndex);
  const onClickNavItem = () => {};
  return (
    <Wrapper>
      <NavWrapper>
        {props.menus.map((el, index) =>
          index === activeIndex ? (
            <NavItemActive key={index}>{el.name}</NavItemActive>
          ) : (
            <NavItem key={index}>{el.name}</NavItem>
          )
        )}
      </NavWrapper>
    </Wrapper>
  );
};
export default Navigation;
