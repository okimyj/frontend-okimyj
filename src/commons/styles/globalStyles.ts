import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin:0;
    box-sizing:border-box;
    font-family:"defaultFont";
  }
  @font-face {
    font-family:"defaultFont";
    src:url("/fonts/DalseoHealingMedium.ttf");
  }
`;