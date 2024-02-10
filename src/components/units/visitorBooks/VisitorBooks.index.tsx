import { rem } from "@/src/commons/styles/common";
import VisitorBookList from "./list/VisitorBookList.index";
import VisitorBookWrite from "./write/VisitorBookWrite.index";
import styled from "@emotion/styled";
const VisitorBooks = () => {
  return (
    <Wrapper>
      <VisitorBookWrite></VisitorBookWrite>
      <VisitorBookList></VisitorBookList>
    </Wrapper>
  );
};

export default VisitorBooks;

const Wrapper = styled.div`
  margin-top: ${rem(20)};
`;
