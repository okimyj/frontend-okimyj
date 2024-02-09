import { rem } from "@/src/commons/styles/common";
import { theme } from "@/src/commons/styles/theme";
import { IVisitorBook } from "@/src/commons/types/customTypes";
import Button from "@/src/components/commons/form/Button/Button.index";
import styled from "@emotion/styled";
import DOMPurify from "dompurify";
const VisitorBookItem = ({ data }: { data: IVisitorBook }) => {
  return (
    <Wrapper key={data.id}>
      <TopWrapper>
        <Writer>writer : {data.writer}</Writer>
        <ButtonWrapper>
          <Button>수정</Button>
          <Button>삭제</Button>
        </ButtonWrapper>
      </TopWrapper>

      <Contents
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(data?.contents ?? ""),
        }}
      ></Contents>
    </Wrapper>
  );
};
export default VisitorBookItem;
export const Wrapper = styled.div`
  border-radius: ${rem(20)};
  padding: ${rem(10)};
  display: flex;
  flex-direction: column;
  margin-top: ${rem(10)};
  border: 1px solid ${theme.colors.tertiary};
  background-color: ${theme.colors.list_background};
`;
export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Writer = styled.span``;
export const ButtonWrapper = styled.div`
  display: flex;
  button:not(:first-child) {
    margin-left: ${rem(10)};
  }
`;
export const Contents = styled.span`
  padding: ${rem(5)};
`;
export const CreatedAt = styled.span``;
