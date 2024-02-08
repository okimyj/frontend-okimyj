import { HEADER_HEIGHT, rem } from "@/src/commons/styles/common";
import { SCREEN_WIDTH_MAX } from "@/src/commons/styles/common";
import { theme } from "@/src/commons/styles/theme";
import styled from "@emotion/styled";
export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  height: ${rem(HEADER_HEIGHT)};
  @media only screen and (min-aspect-ratio: 360/740) {
    height: calc(${rem(HEADER_HEIGHT)} / 2);
  }

  padding: ${rem(30)};
  display: flex;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
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
  cursor: pointer;
  font-size: ${theme.fontSizes.l};
  opacity: 0.8;
`;
