import useVisitorBooks from "@/src/commons/hooks/customs/useVisitorBooks";
import VisitorBookItem from "./item/VisitorBookItem.index";

const VisitorBookList = () => {
  const { visitBookList } = useVisitorBooks();
  return (
    <section>
      {visitBookList?.map((data) => (
        <VisitorBookItem data={data} />
      ))}
    </section>
  );
};
export default VisitorBookList;
