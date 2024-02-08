import VisitorBookList from "./list/VisitorBookList.index";
import VisitorBookWrite from "./write/VisitorBookWrite.index";

const VisitorBooks = () => {
  return (
    <>
      <VisitorBookWrite></VisitorBookWrite>
      <VisitorBookList></VisitorBookList>
    </>
  );
};

export default VisitorBooks;
