import { DocumentData } from "firebase/firestore";

import useFirestore from "./useFirestore";

const useFirestoreMutation = <IWriteData, IListData>(storePath: string) => {
  const { firebaseAddDoc, firebaseUpdateDoc, firebaseDeleteDoc } = useFirestore();

  const addDoc = (callback?: () => void) => (data: DocumentData) => {
    console.log("addDoc : ", data);
    firebaseAddDoc(storePath, {
      ...data,
      createdAt: Date.now().toString(),
    }).then(() => {
      callback?.();
    });
  };

  const updateDoc = (id: string, data: DocumentData, callback?: () => void) => {
    console.log("updateDoc - id : ", id, " data : ", data);
    firebaseUpdateDoc(storePath, id, {
      ...data,
      createdAt: Date.now().toString(),
    }).then(() => {
      callback?.();
    });
  };

  const deleteDoc = (id: string, callback?: () => void) => {
    console.log("deleteDoc id : ", id);
    firebaseDeleteDoc(storePath, id).then((result) => {
      console.log("deleteDoc result : ", result);
      callback?.();
    });
  };

  return { addDoc, updateDoc, deleteDoc };
};

export default useFirestoreMutation;
