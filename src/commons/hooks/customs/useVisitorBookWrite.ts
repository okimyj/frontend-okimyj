import useFirebaseStore from "./useFirebaseStore";
import { IVisitBookWriteFormData } from "../../types/customTypes";
import { useRecoilState } from "recoil";
import { needVisitorBooksRefreshState } from "../../stores";

const STORE_PATH = "visitBook";
const useVisitorBookWrite = () => {
  const { addDoc } = useFirebaseStore();
  const [, setNeedVisitorBooksRefresh] = useRecoilState(needVisitorBooksRefreshState);

  const onClickSubmit = (data: IVisitBookWriteFormData) => {
    if (typeof window !== "undefined") {
      void addDoc(STORE_PATH, {
        ...data,
        createdAt: Date.now().toString(),
      }).then(() => setNeedVisitorBooksRefresh(true));
    }
  };
  return { onClickSubmit };
};
export default useVisitorBookWrite;
