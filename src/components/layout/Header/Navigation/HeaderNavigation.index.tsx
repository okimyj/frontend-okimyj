import { useState } from "react";
import { HamburgerButton, MenuItem, MenuItemWrapper, Wrapper } from "./HeaderNavigation.styles";
import Hamburger_MD from "@/public/icons/Hamburger_MD.svg";
const MENUS = [
  { name: "About Me", page: "" },
  { name: "Work", page: "" },
  { name: "Marie's Gallery", page: "" },
];
const HeaderNavigation = () => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  return (
    <Wrapper>
      <MenuItemWrapper>
        {MENUS.map((el, index) => (
          <MenuItem key={index}>{el.name}</MenuItem>
        ))}
      </MenuItemWrapper>
      <HamburgerButton>
        <Hamburger_MD />
      </HamburgerButton>
    </Wrapper>
  );
};
export default HeaderNavigation;
