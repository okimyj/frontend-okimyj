import useFirestoreMutation from "@/src/commons/hooks/customs/useFirestoreMutation";
import VisitorBookItem from "./item/VisitorBookItem.index";
import { STORE_PATH_VISITOR_BOOK } from "@/src/commons/constants";
import { orderBy } from "firebase/firestore";
import useFirestoreFetch from "@/src/commons/hooks/customs/useFirestoreFetch";

const VisitorBookList = () => {
  const { docs } = useFirestoreFetch(STORE_PATH_VISITOR_BOOK, orderBy("createdAt", "desc"));
  return (
    <section>
      {docs?.map((data) => (
        <VisitorBookItem key={data.id} data={data} />
      ))}
    </section>
  );
};
export default VisitorBookList;
