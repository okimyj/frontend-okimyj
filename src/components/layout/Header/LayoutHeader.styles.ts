import { rem } from "@/src/styles/common";
import { SCREEN_WIDTH_MAX } from "@/src/styles/globalStyles";
import { theme } from "@/src/styles/theme";
import styled from "@emotion/styled";
export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  height: ${rem(80)};
  padding: ${rem(30)};
  display: flex;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 1;
  box-shadow: ${theme.colors.tertiary} 0px ${rem(1)} ${rem(8)};
`;
export const InnerWrapper = styled.div`
  width: ${rem(SCREEN_WIDTH_MAX)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeadLogo = styled.button`
  background-color: transparent;
  border: none;
  font-weight: bold;

  font-size: ${theme.fontSizes.l};
  opacity: 0.4;
  :hover {
    opacity: 0.8;
  }
`;
