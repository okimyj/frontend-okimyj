import { useEffect, useState } from "react";
import { IVisitBook } from "../../types/customTypes";
import useFirebaseStore from "./useFirebaseStore";

const STORE_PATH = "visitBook";
const useVisitorBooks = () => {
  const { getDocs } = useFirebaseStore();
  const [visitBookList, setVisitBookList] = useState<IVisitBook[]>([]);
  useEffect(() => {
    getDocs(STORE_PATH).then((snapShot) => {
      if (!snapShot) return;
      const bookList: IVisitBook[] = [];
      snapShot.forEach((doc) => {
        bookList.push({ id: doc.id, ...doc.data() });
      });
      setVisitBookList(bookList);
    });
  }, []);
  return { visitBookList };
};

export default useVisitorBooks;
