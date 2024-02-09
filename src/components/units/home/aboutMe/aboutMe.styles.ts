import { rem } from "@/src/commons/styles/common";
import { theme } from "@/src/commons/styles/theme";
import styled from "@emotion/styled";

export const Wrapper = styled.section`
  margin: ${rem(10)};
`;

export const Headline = styled.h1``;
export const IntroBase = styled.p`
  word-break: keep-all;
  line-height: 1.8;
`;

export const ClientIntro = styled(IntroBase)`
  text-indent: ${rem(10)};
  font-size: ${theme.fontSizes.m};
`;
export const FrontendIntro = styled(IntroBase)`
  font-size: ${theme.fontSizes.l};
`;
