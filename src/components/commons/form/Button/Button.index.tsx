import { rem } from "@/src/commons/styles/common";
import { theme } from "@/src/commons/styles/theme";
import styled from "@emotion/styled";
import { ButtonHTMLAttributes } from "react";
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
const Button = (props: IButtonProps) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  border: 1px solid ${theme.colors.primary};
  background-color: ${theme.colors.list_background};
  border-radius: ${rem(3)};
  padding: 0 ${rem(10)};
  :hover {
    background-color: ${theme.colors.secondary};
  }
`;
