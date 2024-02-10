import { DropdownNavWrapper, HamburgerButton, NavItem, NavItemWrapper, Wrapper } from "./HeaderNavigation.styles";
import Hamburger_MD from "@/public/icons/Hamburger_MD.svg";
import { useRouter } from "next/router";
import useWindowSize from "@/src/commons/hooks/customs/useWindowSize";
import { CAN_SHOW_NAVIGATION_WIDTH_MIN } from "@/src/commons/styles/common";
import { useMemo, useRef, useState } from "react";

const MENUS = [
  { name: "Home", path: "/" },
  { name: "Visitor Books", path: "/visitorBooks" },
  { name: "Marie's Gallery", path: "" },
];
const HeaderNavigation = () => {
  const router = useRouter();
  const windowSize = useWindowSize();
  const [isDropdownMenuShow, setIsDropdownMenuShow] = useState<boolean>(false);
  const onClickMenu = (page: string) => () => {
    if (page) {
      router.push(page).then(() => {
        setIsDropdownMenuShow(false);
      });
    }
  };
  const NavItems = useMemo(() => {
    return MENUS.map((el, index) => (
      <NavItem className={router.pathname === el.path ? "active" : ""} onClick={onClickMenu(el.path)} key={index}>
        {el.name}
      </NavItem>
    ));
  }, []);
  const onClickHamburger = () => {
    setIsDropdownMenuShow(!isDropdownMenuShow);
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
      {isDropdownMenuShow && <DropdownNavWrapper>{NavItems}</DropdownNavWrapper>}
    </Wrapper>
  );
};
export default HeaderNavigation;
