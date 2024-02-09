import { rem } from "@/src/commons/styles/common";
import { theme } from "@/src/commons/styles/theme";
import styled from "@emotion/styled";
import { InputHTMLAttributes } from "react";
interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
}
const Input = ({ title, ...rest }: IInputProps) => {
  return (
    <div>
      {title ? <StyledSpan>{title}</StyledSpan> : ""}
      <StyledInput {...rest} />
    </div>
  );
};

export default Input;
const StyledSpan = styled.span`
  margin-right: ${rem(10)};
`;
const StyledInput = styled.input`
  border: 1px solid #eee;
  border-radius: ${rem(5)};
  outline-color: ${theme.colors.primary};
`;
