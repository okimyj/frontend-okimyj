import { rem } from "@/src/commons/styles/common";
import { theme } from "@/src/commons/styles/theme";
import styled from "@emotion/styled";
import { InputHTMLAttributes, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  register?: UseFormRegisterReturn;
}
const Input = ({ title, register, ...rest }: IInputProps) => {
  if (title === "writer") console.log("rest : ", rest.value);
  return (
    <div>
      {title ? <StyledSpan>{title}</StyledSpan> : ""}
      <StyledInput {...register} {...rest} />
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
