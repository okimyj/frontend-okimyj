import { rem } from "@/src/styles/common";
import { SCREEN_WIDTH_MAX } from "@/src/styles/globalStyles";
import styled from "@emotion/styled";
export const Wrapper = styled.main`
  margin: auto;
  max-width: ${rem(SCREEN_WIDTH_MAX)};
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
