import { rem } from "@/src/commons/styles/common";
import { theme } from "@/src/commons/styles/theme";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  z-index: -1;
`;
export const TitleImageWrapper = styled.div`
  position: relative;
  max-height: 100vh;
  width: fit-content;
  height: fit-content;
`;

export const GradientRect = styled.div`
  z-index: 1;
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(
      to bottom,
      ${theme.colors.background} 10%,
      rgb(255, 255, 255, 0) 20% 80%,
      ${theme.colors.background} 90% 100%
    ),
    linear-gradient(
      to right,
      ${theme.colors.background} 10%,
      rgb(255, 255, 255, 0) 30% 80%,
      ${theme.colors.background} 90% 100%
    );
`;

export const TitleLogo = styled.div`
  position: absolute;
  left: ${rem(20)};
  bottom: ${rem(20)};
  font-size: ${theme.fontSizes.main_title};
  font-weight: bold;
  color: ${theme.colors.primary};
  z-index: 1;
  animation: fadeIn 1s;
  font-display: block;
  @keyframes fadeIn {
    from {
      bottom: ${rem(-20)};
      opacity: 0;
    }
    to {
      bottom: ${rem(20)};
      opacity: 1;
    }
  }
  @media only screen and (max-width: 640px) {
    font-size: calc(${theme.fontSizes.main_title} / 2);
  }
`;
