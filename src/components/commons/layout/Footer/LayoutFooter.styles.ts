import { rem } from "@/src/components/commons/styles/common";
import { theme } from "@/src/components/commons/styles/theme";
import styled from "@emotion/styled";
export const Wrapper = styled.footer`
  width: 100%;
  margin-top: 50px;
  opacity: 0.8;
  box-shadow: ${theme.colors.tertiary} 0px ${rem(-1)} ${rem(8)};
  background-color: ${theme.colors.secondary};
`;
