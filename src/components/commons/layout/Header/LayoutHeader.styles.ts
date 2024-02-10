import { HEADER_HEIGHT, rem } from "@/src/commons/styles/common";
import { SCREEN_WIDTH_MAX } from "@/src/commons/styles/common";
import { theme } from "@/src/commons/styles/theme";
import styled from "@emotion/styled";
export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${rem(HEADER_HEIGHT)};
  padding: ${rem(30)};
  display: flex;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 1;
  box-shadow: ${theme.colors.tertiary} 0px ${rem(1)} ${rem(8)};
  animation: headerFadeIn 1s;
  font-display: block;
  @keyframes headerFadeIn {
    from {
      transform: translateY(${rem(-50)});
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
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
  font-size: ${theme.fontSizes.header_logo};
  opacity: 0.8;
`;
