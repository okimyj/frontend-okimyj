import useVisitorBookWrite from "@/src/commons/hooks/customs/useVisitorBookWrite";
import { IVisitBookWriteFormData } from "@/src/commons/types/customTypes";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
const ReactQuill = dynamic(async () => await import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { Input, Wrapper } from "./VisitorBookWrite.styles";

const VisitorBookWrite = () => {
  const { register, setValue, trigger, handleSubmit } = useForm<IVisitBookWriteFormData>();
  const { onClickSubmit } = useVisitorBookWrite();
  const onChangeContents = (value: string): void => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    void trigger("contents");
  };
  return (
    <Wrapper onSubmit={handleSubmit(onClickSubmit)}>
      writer <Input {...register("writer")} />
      password <Input {...register("title")} />
      <ReactQuill onChange={onChangeContents}></ReactQuill>
      <button>Submit</button>
    </Wrapper>
  );
};

export default VisitorBookWrite;
