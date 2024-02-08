import { rem } from "@/src/commons/styles/common";
import { theme } from "@/src/commons/styles/theme";
import styled from "@emotion/styled";

export const Wrapper = styled.section`
  margin: ${rem(10)};
`;

export const Headline = styled.h1``;
export const Pilcrow = styled.p`
  text-indent: ${rem(5)};
  word-break: keep-all;
  line-height: 1.8;
`;
