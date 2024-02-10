import { HEADER_HEIGHT, SCREEN_WIDTH_MAX, rem } from "@/src/commons/styles/common";
import { theme } from "@/src/commons/styles/theme";
import styled from "@emotion/styled";

export const Wrapper = styled.nav`
  position: fixed;
  max-width: calc(${rem(SCREEN_WIDTH_MAX)} - ${rem(25)});
  width: calc(100% - ${rem(55)});
  top: calc(${rem(HEADER_HEIGHT)} + ${rem(20)});
  display: flex;
  justify-content: flex-end;
  font-size: ${theme.fontSizes.l};
  font-weight: bold;
`;

export const NavItem = styled.a`
  color: ${theme.colors.primary};
  text-decoration: none;
  &:not(:first-of-type) {
    margin-left: ${rem(20)};
  }
  opacity: 0.5;
  &.active {
    opacity: 1;
    background-image: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.5) 100%);
    background-repeat: no-repeat;
    background-size: 100% 30%;
    background-position: 0 88%;
  }
`;
