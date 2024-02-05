import { Theme } from "@emotion/react";

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      black: string
      white: string
      primary: string
      // secondary: string
    };
  }
}
export const theme : Theme = {
  colors:{
    black:'#000',
    white:'#fff',
    primary:'#4B0082',
  }
}
