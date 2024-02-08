import dynamic from "next/dynamic";
import useVisitorBookWrite from "@/src/commons/hooks/customs/useVisitorBookWrite";
import { IVisitorBookWriteFormData } from "@/src/commons/types/customTypes";
import { useForm } from "react-hook-form";
import { Input, SummitButton, FormWrapper } from "./VisitorBookWrite.styles";

const ReactQuill = dynamic(async () => await import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { useEffect, useState } from "react";

const VisitorBookWrite = () => {
  const { onClickSubmit } = useVisitorBookWrite();
  const { register, reset, setValue, trigger, handleSubmit } = useForm<IVisitorBookWriteFormData>();
  const [contents, setContents] = useState<string>("");

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
    <FormWrapper onSubmit={handleSubmit(onClickSubmit(resetFields))}>
      writer <Input {...register("writer")} />
      password <Input type="password" {...register("password")} />
      <ReactQuill onChange={onChangeContents} value={contents}></ReactQuill>
      <SummitButton>Submit</SummitButton>
    </FormWrapper>
  );
};

export default VisitorBookWrite;
