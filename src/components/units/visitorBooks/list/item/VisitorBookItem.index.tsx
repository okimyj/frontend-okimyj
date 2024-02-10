import { STORE_PATH_VISITOR_BOOK } from "@/src/commons/constants";
import useFirestoreMutation from "@/src/commons/hooks/customs/useFirestoreMutation";
import { rem } from "@/src/commons/styles/common";
import { theme } from "@/src/commons/styles/theme";
import { IVisitorBook } from "@/src/commons/types/customTypes";
import Button from "@/src/components/commons/form/Button/Button.index";
import Input from "@/src/components/commons/form/Input/Input.index";
import styled from "@emotion/styled";
import DOMPurify from "dompurify";
import { ChangeEvent, useState } from "react";

import dynamic from "next/dynamic";
const ReactQuill = dynamic(async () => await import("react-quill"), { ssr: false });
const VisitorBookItem = ({ data }: { data: IVisitorBook }) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [contents, setContents] = useState<string>(data.contents ?? "");
  const [password, setPassword] = useState<string>("");
  const { updateDoc, deleteDoc } = useFirestoreMutation(STORE_PATH_VISITOR_BOOK);

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  const onChangeContents = (value: string) => {
    setContents(value);
  };
  const toggleIsEdit = () => {
    setIsEditMode(!isEditMode);
    setPassword("");
  };
  const onClickDeleteButton = () => {
    deleteDoc(data.id, toggleIsEdit);
  };
  const onClickUpdateButton = () => {
    if (password !== data.password) {
      alert("비밀번호가 틀립니다.");
      return;
    }
    updateDoc(data.id, { ...data, contents }, () => {
      toggleIsEdit();
    });
  };

  return (
    <Wrapper>
      <TopWrapper>
        <span>writer : {data.writer}</span>

        {isEditMode ? (
          <Button onClick={toggleIsEdit}>취소</Button>
        ) : (
          <ButtonWrapper>
            <Button onClick={toggleIsEdit}>수정</Button>
            <Button onClick={onClickDeleteButton}>삭제</Button>
          </ButtonWrapper>
        )}
      </TopWrapper>
      {isEditMode ? (
        <>
          <ReactQuill onChange={onChangeContents} value={contents}></ReactQuill>
          <ButtonWrapper>
            <Input title={"password"} onChange={onChangePassword} value={password} />
            <Button onClick={onClickUpdateButton}>완료</Button>
          </ButtonWrapper>
        </>
      ) : (
        <Contents
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data.contents ?? ""),
          }}
        ></Contents>
      )}
    </Wrapper>
  );
};
export default VisitorBookItem;
const Wrapper = styled.div`
  border-radius: ${rem(20)};
  padding: ${rem(10)};
  display: flex;
  flex-direction: column;
  margin-top: ${rem(10)};
  border: 1px solid ${theme.colors.tertiary};
  background-color: ${theme.colors.list_background};

  .quill {
    margin: ${rem(10)} 0;
    background-color: #fff;
  }
`;
const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ButtonWrapper = styled.div`
  display: flex;
  div {
    margin-right: ${rem(10)};
  }
  button:not(:first-of-type) {
    margin-left: ${rem(10)};
  }
`;
const Contents = styled.span`
  padding: ${rem(5)};
`;
const CreatedAt = styled.span``;
