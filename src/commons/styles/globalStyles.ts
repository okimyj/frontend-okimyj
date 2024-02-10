import { css } from "@emotion/react";
import { theme } from "./theme";
import { rem } from "./common";
export const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap");
  @font-face {
    font-family: "Gowun Dodum", Verdana;
    src: url("https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap") format("truetype");
  }
  @media all and (max-width: 750px) {
    html {
      font-size: 80%;
    }
  }
  * {
    font-family: "Gowun Dodum";
    margin: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${theme.colors.background};
  }
  body::-webkit-scrollbar {
    width: ${rem(5)};
  }
  body::-webkit-scrollbar-thumb {
    height: 30%;
    border-radius: ${rem(5)};
    background: ${theme.colors.primary};
  }
  body::-webkit-scrollbar-track {
    background-color: ${theme.colors.secondary};
  }
`;
