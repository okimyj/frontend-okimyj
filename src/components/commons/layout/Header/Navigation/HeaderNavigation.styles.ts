import styled from "@emotion/styled";
import { rem } from "../../../../../commons/styles/common";
import { theme } from "../../../../../commons/styles/theme";
export const Wrapper = styled.nav`
  display: flex;
  /* background-color: ${theme.colors.primary}; */
`;
export const MenuItemWrapper = styled.div`
  @media only screen and (max-width: 640px) {
    display: flex;
  }
  display: flex;
  flex-direction: row;
`;
export const MenuItem = styled.button`
  margin-left: ${rem(30)};
  background-color: transparent;
  border: none;
  font-weight: bold;
  font-size: ${theme.fontSizes.l};
  cursor: pointer;
  opacity: 0.4;
  :hover {
    opacity: 0.8;
  }
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
