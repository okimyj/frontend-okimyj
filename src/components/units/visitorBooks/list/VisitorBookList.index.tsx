import useVisitorBooks from "@/src/commons/hooks/customs/useVisitorBooks";
import { BookWrapper, Writer, Wrapper, Contents } from "./VisitorBookList.styles";
import DOMPurify from "dompurify";
const VisitorBookList = () => {
  const { visitBookList } = useVisitorBooks();
  return (
    <Wrapper>
      {visitBookList?.map((data) => (
        <BookWrapper key={data.id}>
          <Writer>writer : {data.writer}</Writer>
          <Contents
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data?.contents ?? ""),
            }}
          ></Contents>
        </BookWrapper>
      ))}
    </Wrapper>
  );
};
export default VisitorBookList;
