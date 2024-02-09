import { Theme } from "@emotion/react";
import { rem } from "./common";

declare module "@emotion/react" {
  export interface Theme {
    fontSizes: {
      xxs: string;
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      header_logo: string;
      header_menu: string;

      main_title: string;
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
    xxs: rem(10),
    xs: rem(12),
    s: rem(14),
    m: rem(16),
    l: rem(18),
    xl: rem(24),
    header_logo: rem(20),
    header_menu: rem(20),
    main_title: rem(60),
  },
  colors: {
    black: "#000",
    white: "#fff",
    primary: "#967d52",
    secondary: "#DFD5C4",
    tertiary: "#BDAA89",
    background: "#CFC1A8",
    list_background: "#FFFFFF90",
    // background: "#ff0000",
  },
};
