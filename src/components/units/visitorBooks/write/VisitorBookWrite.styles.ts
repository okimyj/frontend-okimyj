import { rem } from "@/src/commons/styles/common";
import { theme } from "@/src/commons/styles/theme";
import styled from "@emotion/styled";

export const Wrapper = styled.form`
  .quill {
    margin: ${rem(10)} 0;
  }
`;
export const Input = styled.input`
  border: 1px solid #eee;
  border-radius: ${rem(5)};
  margin-right: ${rem(10)};
`;
