import { NavItem, NavItemActive, NavWrapper, Wrapper } from "./Navigation.styles";
const NAV_MENUS = [
  { index: 1, name: "About Me" },
  { index: 2, name: "Work" },
];
const Navigation = ({ activeIndex }: { activeIndex: number }) => {
  return (
    <Wrapper>
      <NavWrapper>
        {NAV_MENUS.map((el) =>
          el.index === activeIndex ? <NavItemActive>{el.name}</NavItemActive> : <NavItem>{el.name}</NavItem>
        )}
      </NavWrapper>
    </Wrapper>
  );
};
export default Navigation;
