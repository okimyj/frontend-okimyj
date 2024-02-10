import styled from "@emotion/styled";
import { HEADER_HEIGHT, rem } from "../../../../../commons/styles/common";
import { theme } from "../../../../../commons/styles/theme";
export const Wrapper = styled.nav`
  display: flex;
`;
export const NavItemWrapper = styled.div`
  display: flex;
  flex-direction: row;

  button:not(:first-of-type) {
    margin-left: ${rem(30)};
  }
`;
export const NavItem = styled.button`
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
  &.active {
    opacity: 1;
  }
`;
export const HamburgerButton = styled.button`
  width: ${rem(50)};
  height: ${rem(80)};
  background-color: transparent;
  color: ${theme.colors.primary};
  border: none;
`;
export const DropdownNavWrapper = styled.div`
  position: absolute;
  top: ${rem(HEADER_HEIGHT)};
  right: 0;

  padding: ${rem(10)} ${rem(20)} ${rem(20)} ${rem(20)};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: rgba(255, 255, 255, 0.9);
  border-bottom-left-radius: ${rem(20)};
  button:not(:first-of-type) {
    margin-top: ${rem(10)};
  }
`;
