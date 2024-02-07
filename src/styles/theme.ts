import { Theme } from "@emotion/react";
import { rem } from "./common";

declare module "@emotion/react" {
  export interface Theme {
    fontSizes: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      title: string;
    };
    colors: ColorTheme;
  }
}
interface ColorTheme {
  black: string;
  white: string;
  primary: string;
  secondary: string;
  tertiary: string;
  background: string;
  list_background: string;
}
export const theme: Theme = {
  fontSizes: {
    xs: rem(10),
    s: rem(12),
    m: rem(16),
    l: rem(20),
    xl: rem(24),
    title: rem(60),
  },
  colors: {
    black: "#000",
    white: "#fff",
    primary: "#967d52",
    secondary: "#DFD5C4",
    tertiary: "#BDAA89",
    background: "#CFC1A8",
    list_background: "#FFFFFF",
    // background: "#ff0000",
  },
};
