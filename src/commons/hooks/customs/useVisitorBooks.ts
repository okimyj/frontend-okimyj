import { useEffect, useState } from "react";
import { IVisitorBook } from "../../types/customTypes";
import { orderBy } from "firebase/firestore";
import useFirebaseStore from "./useFirebaseStore";

const STORE_PATH = "visitBook";
const useVisitorBooks = () => {
  const { firebaseGetDocsRealtime } = useFirebaseStore();
  const [visitBookList, setVisitBookList] = useState<IVisitorBook[]>([]);
  useEffect(() => {
    refreshVisitorBooks();
  }, []);

  const refreshVisitorBooks = async () => {
    firebaseGetDocsRealtime(STORE_PATH, orderBy("createdAt", "desc"), null, (snapshot) => {
      if (!snapshot) return;

      const bookList: IVisitorBook[] = [];
      snapshot.forEach((doc) => {
        bookList.push({ id: doc.id, ...doc.data() });
      });

      setVisitBookList(bookList);
    });
  };

  return { visitBookList };
};

export default useVisitorBooks;
