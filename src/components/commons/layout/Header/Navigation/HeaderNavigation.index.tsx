import { useState } from "react";
import { HamburgerButton, MenuItem, MenuItemWrapper, Wrapper } from "./HeaderNavigation.styles";
import Hamburger_MD from "@/public/icons/Hamburger_MD.svg";
import { useRouter } from "next/router";
const MENUS = [
  { name: "About Me", page: "" },
  { name: "Work", page: "" },
  { name: "Visitor Books", page: "/visitorBooks" },
  { name: "Marie's Gallery", page: "" },
];
const HeaderNavigation = () => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const router = useRouter();
  const onClickMenu = (page: string) => () => {
    if (page) router.push(page);
  };
  return (
    <Wrapper>
      <MenuItemWrapper>
        {MENUS.map((el, index) => (
          <MenuItem onClick={onClickMenu(el.page)} key={index}>
            {el.name}
          </MenuItem>
        ))}
      </MenuItemWrapper>
      <HamburgerButton>
        <Hamburger_MD />
      </HamburgerButton>
    </Wrapper>
  );
};
export default HeaderNavigation;
