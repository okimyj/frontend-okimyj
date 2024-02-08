import useFirebaseStore from "./useFirebaseStore";
import { IVisitBookWriteFormData } from "../../types/customTypes";

const STORE_PATH = "visitBook";
const useVisitorBookWrite = () => {
  const { addDoc } = useFirebaseStore();

  const onClickSubmit = (data: IVisitBookWriteFormData) => {
    if (typeof window !== "undefined") {
      void addDoc(STORE_PATH, {
        ...data,
        createdAt: Date.now().toString(),
      });
    }
  };
  return { onClickSubmit };
};
export default useVisitorBookWrite;
