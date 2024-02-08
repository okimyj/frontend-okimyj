import useFirebaseStore from "./useFirebaseStore";
import { IVisitorBookWriteFormData } from "../../types/customTypes";

const STORE_PATH = "visitBook";
const useVisitorBookWrite = () => {
  const { firebaseAddDoc } = useFirebaseStore();

  const onClickSubmit = (callback?: () => void) => (data: IVisitorBookWriteFormData) => {
    if (typeof window !== "undefined") {
      firebaseAddDoc(STORE_PATH, {
        ...data,
        createdAt: Date.now().toString(),
      }).then(() => {
        callback?.();
      });
    }
  };
  return { onClickSubmit };
};
export default useVisitorBookWrite;
