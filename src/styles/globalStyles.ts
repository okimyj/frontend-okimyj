import { css } from "@emotion/react";
import { theme } from "./theme";

export const SCREEN_WIDTH_MAX = 1200;
export const SCREEN_WIDTH_MIN = 360;

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${theme.colors.background};
  }
  body::-webkit-scrollbar {
    width: 5px;
  }
  body::-webkit-scrollbar-thumb {
    height: 30%;
    border-radius: 5px;
    background: ${theme.colors.tertiary};
  }
  body::-webkit-scrollbar-track {
    background-color: ${theme.colors.secondary};
  }
  @font-face {
    font-family: "Gowun Dodum", sans-serif;
    src: url("https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap");
  }
`;
