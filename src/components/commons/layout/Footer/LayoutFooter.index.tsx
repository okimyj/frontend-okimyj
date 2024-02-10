import { FOOTER_HEIGHT, rem } from "@/src/commons/styles/common";
import { theme } from "@/src/commons/styles/theme";
import styled from "@emotion/styled";

const LayoutFooter = () => {
  return <Wrapper>Copyright 2024 by okimyj</Wrapper>;
};

export default LayoutFooter;

const Wrapper = styled.footer`
  position: relative;
  bottom: 0;
  width: 100%;
  height: ${rem(FOOTER_HEIGHT)};
  opacity: 0.8;
  box-shadow: ${theme.colors.tertiary} 0px ${rem(-1)} ${rem(8)};
`;
