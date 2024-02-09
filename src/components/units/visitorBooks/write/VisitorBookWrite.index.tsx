import dynamic from "next/dynamic";
import { IVisitorBook, IVisitorBookWriteFormData } from "@/src/commons/types/customTypes";
import { useForm } from "react-hook-form";
import { rem } from "@/src/commons/styles/common";
import styled from "@emotion/styled";

const ReactQuill = dynamic(async () => await import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import useVisitorBooks from "@/src/commons/hooks/customs/useVisitorBooks";
import Input from "@/src/components/commons/form/Input/Input.index";
import Button from "@/src/components/commons/form/Button/Button.index";
interface IVisitorBookWriteProps {
  data?: IVisitorBook;
}
const VisitorBookWrite = (props: IVisitorBookWriteProps) => {
  const { addVisitorBook, updateVisitorBook } = useVisitorBooks();
  const { register, reset, setValue, trigger, handleSubmit } = useForm<IVisitorBookWriteFormData>();
  const [contents, setContents] = useState<string>("");
  useEffect(() => {
    if (props) {
      setValue("writer", props.data?.writer ?? "");
      setValue("password", props.data?.password ?? "");
      setContents(props.data?.contents ?? "");
    }
  }, []);
  useEffect(() => {
    setValue("contents", contents === "<p><br></p>" ? "" : contents);
    void trigger("contents");
  }, [contents]);

  const onChangeContents = (value: string): void => {
    setContents(value);
  };

  const resetFields = () => {
    reset();
    setContents("");
  };

  return (
    <FormWrapper
      onSubmit={handleSubmit(props.data ? updateVisitorBook(props.data.id, resetFields) : addVisitorBook(resetFields))}
    >
      <InputWrapper>
        <Input title={"writer"} {...register("writer")} />
        <Input title={"password"} type="password" {...register("password")} />
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
  div:not(:first-child) {
    margin-left: ${rem(10)};
  }
`;
