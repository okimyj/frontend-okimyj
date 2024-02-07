import { rem } from "@/src/styles/common";
import { SCREEN_WIDTH_MAX } from "@/src/styles/globalStyles";
import styled from "@emotion/styled";
export const Wrapper = styled.main`
  max-width: ${rem(SCREEN_WIDTH_MAX)};
  margin: auto;
  padding: ${rem(20)};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
