import { DropdownNavWrapper, HamburgerButton, NavItem, NavItemWrapper, Wrapper } from "./HeaderNavigation.styles";
import Hamburger_MD from "@/public/icons/Hamburger_MD.svg";
import { useRouter } from "next/router";
import useWindowSize from "@/src/commons/hooks/customs/useWindowSize";
import { CAN_SHOW_NAVIGATION_WIDTH_MIN } from "@/src/commons/styles/common";
import { useMemo, useRef, useState } from "react";

const MENUS = [
  { name: "Home", path: "/" },
  { name: "Visitor Books", path: "/visitorBooks" },
  { name: "Gallery", path: "/gallery" },
];
const HeaderNavigation = () => {
  const router = useRouter();
  const windowSize = useWindowSize();
  const dropdownMenuRef = useRef<HTMLDivElement>(null);
  const onClickMenu = (page: string) => () => {
    if (page) {
      router.push(page).then(() => {
        dropdownMenuRef.current?.classList.remove("open");
      });
    }
  };
  const NavItems = useMemo(() => {
    return MENUS.map((el, index) => (
      <NavItem className={router.pathname === el.path ? "active" : ""} onClick={onClickMenu(el.path)} key={index}>
        {el.name}
      </NavItem>
    ));
  }, [router]);
  const onClickHamburger = () => {
    dropdownMenuRef.current?.classList.toggle("open");
  };
  return (
    <Wrapper>
      {windowSize.width > CAN_SHOW_NAVIGATION_WIDTH_MIN ? (
        <NavItemWrapper>{NavItems}</NavItemWrapper>
      ) : (
        <HamburgerButton onClick={onClickHamburger}>
          <Hamburger_MD />
        </HamburgerButton>
      )}
      {<DropdownNavWrapper ref={dropdownMenuRef}>{NavItems}</DropdownNavWrapper>}
    </Wrapper>
  );
};
export default HeaderNavigation;
