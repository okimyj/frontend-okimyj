import { useEffect, useState } from "react";
import { IVisitBook } from "../../types/customTypes";
import useFirebaseStore from "./useFirebaseStore";
import { orderBy } from "firebase/firestore";

const STORE_PATH = "visitBook";
const useVisitorBooks = () => {
  const { getDocs } = useFirebaseStore();
  const [visitBookList, setVisitBookList] = useState<IVisitBook[]>([]);
  useEffect(() => {
    refreshVisitorBooks();
  }, []);

  const refreshVisitorBooks = async () => {
    getDocs(STORE_PATH, orderBy("createdAt", "desc"), null, (snapshot) => {
      if (!snapshot) return;

      const bookList: IVisitBook[] = [];

      snapshot.forEach((doc) => {
        bookList.push({ id: doc.id, ...doc.data() });
      });

      setVisitBookList(bookList);
    });
  };

  return { visitBookList };
};

export default useVisitorBooks;
