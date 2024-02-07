import { HEADER_HEIGHT, rem } from "@/src/components/commons/styles/common";
import { SCREEN_WIDTH_MAX } from "@/src/components/commons/styles/common";
import styled from "@emotion/styled";
export const Wrapper = styled.main`
  position: relative;
  top: ${rem(HEADER_HEIGHT)};
  max-width: ${rem(SCREEN_WIDTH_MAX)};
  margin: auto;
  padding: ${rem(20)};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
