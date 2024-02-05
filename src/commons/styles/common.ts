import { Theme } from "@emotion/react"
export const rem = (px:number)=>`${px / 16}rem`
export const Common = {
  
}

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
