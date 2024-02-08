import { useEffect, useState } from "react";
import { IVisitBook } from "../../types/customTypes";
import useFirebaseStore from "./useFirebaseStore";
import { useRecoilState } from "recoil";
import { needVisitorBooksRefreshState } from "../../stores";

const STORE_PATH = "visitBook";
const useVisitorBooks = () => {
  const { getDocs } = useFirebaseStore();
  const [visitBookList, setVisitBookList] = useState<IVisitBook[]>([]);
  const [needVisitorBooksRefresh, setNeedVisitorBooksRefresh] = useRecoilState(needVisitorBooksRefreshState);
  useEffect(() => {
    refreshVisitorBooks();
  }, []);

  useEffect(() => {
    if (needVisitorBooksRefresh) refreshVisitorBooks();
  }, [needVisitorBooksRefresh]);
  const refreshVisitorBooks = async () => {
    getDocs(STORE_PATH).then((snapShot) => {
      if (!snapShot) return;
      const bookList: IVisitBook[] = [];
      snapShot.forEach((doc) => {
        bookList.push({ id: doc.id, ...doc.data() });
      });
      bookList.sort((a, b) => (a.createdAt && b.createdAt ? b.createdAt.localeCompare(a.createdAt) : 0));
      setVisitBookList(bookList);
    });
    setNeedVisitorBooksRefresh(false);
  };
  return { visitBookList };
};

export default useVisitorBooks;
