import { rem } from "@/src/styles/common";
import { theme } from "@/src/styles/theme";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  z-index: -1;
`;
export const TitleImageWrapper = styled.div`
  position: relative;
  max-height: 100vh;
  height: fit-content;
  img {
    width: 100%;
    height: auto;
  }
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
  bottom: ${rem(20)};
  font-size: ${theme.fontSizes.title};
  font-weight: bold;
  color: ${theme.colors.primary};
  z-index: 1;
  @media only screen and (max-width: 640px) {
    font-size: calc(${theme.fontSizes.title} / 2);
  }
`;
