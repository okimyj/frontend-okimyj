import styled from "@emotion/styled";
import { ButtonHTMLAttributes } from "react";
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: string;
}
const IconButton = (props: IButtonProps) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default IconButton;

const StyledButton = styled.button`
  border: none;
  color: ${(props) => props.color ?? "#000"};
  background-color: transparent;
`;
