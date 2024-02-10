import { useState } from "react";
import { HamburgerButton, NavItem, MenuItemActive, NavItemWrapper, Wrapper } from "./HeaderNavigation.styles";
import Hamburger_MD from "@/public/icons/Hamburger_MD.svg";
import { useRouter } from "next/router";
import useWindowSize from "@/src/commons/hooks/customs/useWindowSize";
const MENUS = [
  { name: "Home", path: "/" },
  { name: "Visitor Books", path: "/visitorBooks" },
  { name: "Marie's Gallery", path: "" },
];
const HeaderNavigation = () => {
  const router = useRouter();
  const windowSize = useWindowSize();
  const onClickMenu = (page: string) => () => {
    if (page) router.push(page);
  };
  return (
    <Wrapper>
      {windowSize.width > 700 ? (
        <NavItemWrapper>
          {MENUS.map((el, index) =>
            router.pathname === el.path ? (
              <MenuItemActive key={index}>{el.name}</MenuItemActive>
            ) : (
              <NavItem onClick={onClickMenu(el.path)} key={index}>
                {el.name}
              </NavItem>
            )
          )}
        </NavItemWrapper>
      ) : (
        <HamburgerButton>
          <Hamburger_MD />
        </HamburgerButton>
      )}
    </Wrapper>
  );
};
export default HeaderNavigation;
