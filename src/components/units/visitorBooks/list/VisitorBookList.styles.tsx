import { rem } from "@/src/commons/styles/common";
import { theme } from "@/src/commons/styles/theme";
import styled from "@emotion/styled";

export const Wrapper = styled.section``;
export const BookWrapper = styled.div`
  border-radius: ${rem(20)};
  padding: ${rem(10)};
  display: flex;
  flex-direction: column;
  margin-top: ${rem(10)};
  border: 1px solid ${theme.colors.tertiary};
  background-color: ${theme.colors.list_background};
`;
export const Writer = styled.span``;
export const Contents = styled.span`
  padding: ${rem(5)};
`;
export const CreatedAt = styled.span``;
