import dynamic from "next/dynamic";
import { IVisitorBook, IVisitorBookWriteFormData } from "@/src/commons/types/customTypes";
import { useForm } from "react-hook-form";
import { rem } from "@/src/commons/styles/common";
import styled from "@emotion/styled";

const ReactQuill = dynamic(async () => await import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import useFirestoreMutation from "@/src/commons/hooks/customs/useFirestoreMutation";
import Input from "@/src/components/commons/form/Input/Input.index";
import Button from "@/src/components/commons/form/Button/Button.index";
import { STORE_PATH_VISITOR_BOOK } from "@/src/commons/constants";
const VisitorBookWrite = () => {
  const { addDoc } = useFirestoreMutation(STORE_PATH_VISITOR_BOOK);
  const { register, reset, setValue, trigger, handleSubmit, getValues } = useForm<IVisitorBookWriteFormData>();
  const [contents, setContents] = useState<string>("");

  useEffect(() => {
    setValue("contents", contents === "<p><br></p>" ? "" : contents);
    trigger("contents");
    console.log("getValues : ", getValues());
  }, [contents]);

  const onChangeContents = (value: string): void => {
    setContents(value);
  };

  const resetFields = () => {
    reset();
    setContents("");
  };

  return (
    <FormWrapper onSubmit={handleSubmit(addDoc(resetFields))}>
      <InputWrapper>
        <Input title={"writer"} register={register("writer")} />
        <Input title={"password"} type="password" register={register("password")} />
      </InputWrapper>
      <ReactQuill onChange={onChangeContents} value={contents}></ReactQuill>
      <Button>Submit</Button>
    </FormWrapper>
  );
};

export default VisitorBookWrite;

const FormWrapper = styled.form`
  .quill {
    margin: ${rem(10)} 0;
    background-color: #fff;
  }
`;
const InputWrapper = styled.div`
  display: flex;
  div:not(:first-of-type) {
    margin-left: ${rem(10)};
  }
`;
