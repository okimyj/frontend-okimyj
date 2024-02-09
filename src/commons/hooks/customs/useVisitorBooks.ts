import { useEffect, useState } from "react";
import { IVisitorBook, IVisitorBookWriteFormData } from "../../types/customTypes";
import { orderBy } from "firebase/firestore";
import useFirebaseStore from "./useFirebaseStore";

const STORE_PATH = "visitBook";
const useVisitorBooks = () => {
  const { firebaseAddDoc, firebaseUpdateDoc, firebaseGetDocsRealtime } = useFirebaseStore();
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

  const addVisitorBook = (callback?: () => void) => (data: IVisitorBookWriteFormData) => {
    firebaseAddDoc(STORE_PATH, {
      ...data,
      createdAt: Date.now().toString(),
    }).then(() => {
      callback?.();
    });
  };

  const updateVisitorBook = (id: string, callback?: () => void) => (data: IVisitorBookWriteFormData) => {
    firebaseUpdateDoc(STORE_PATH, id, {
      ...data,
      createdAt: Date.now().toString(),
    }).then(() => {
      callback?.();
    });
  };

  return { addVisitorBook, updateVisitorBook, visitBookList };
};

export default useVisitorBooks;
