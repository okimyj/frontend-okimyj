import styled from "@emotion/styled";
import { rem } from "../../../../../commons/styles/common";
import { theme } from "../../../../../commons/styles/theme";
export const Wrapper = styled.nav`
  display: flex;
  /* background-color: ${theme.colors.primary}; */
`;
export const NavItemWrapper = styled.div`
  @media only screen and (max-width: 640px) {
    display: flex;
  }
  display: flex;
  flex-direction: row;
`;
export const NavItem = styled.button`
  margin-left: ${rem(30)};
  background-color: transparent;
  border: none;
  font-weight: bold;
  font-size: ${theme.fontSizes.header_menu};
  color: ${theme.colors.primary};
  cursor: pointer;
  opacity: 0.4;
  :hover {
    opacity: 0.6;
  }
`;
export const MenuItemActive = styled(NavItem)`
  opacity: 1;
`;
export const HamburgerButton = styled.button`
  @media only screen and (max-width: 640px) {
    width: ${rem(50)};
    height: ${rem(80)};
    background-color: transparent;
    border: none;
    display: block;
  }
  display: none;
`;
