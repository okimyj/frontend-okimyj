import { HEADER_HEIGHT, rem } from "@/src/commons/styles/common";
import { theme } from "@/src/commons/styles/theme";
import styled from "@emotion/styled";

export const Wrapper = styled.nav`
  position: fixed;
  right: 0;
  border: 1px solid red;
  top: ${rem(HEADER_HEIGHT)};
`;
export const NavWrapper = styled.div`
  display: flex;
  color: ${theme.colors.primary};
  font-size: ${theme.fontSizes.l};
  font-weight: bold;
`;

export const NavItem = styled.li`
  list-style: none;
  margin-right: ${rem(20)};
  opacity: 0.5;
`;
export const NavItemActive = styled(NavItem)`
  opacity: 1;
  background-image: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.5) 100%);
  background-repeat: no-repeat;
  background-size: 100% 30%;
  background-position: 0 88%;
`;