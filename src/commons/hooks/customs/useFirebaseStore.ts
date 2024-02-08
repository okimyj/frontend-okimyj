import {
  DocumentData,
  WithFieldValue,
  addDoc as firebaseAddDoc,
  getDocs as firebaseGetDocs,
  collection,
  getFirestore,
  query,
} from "firebase/firestore";
import firebaseApp from "../../libraries/firebase/firebaseApp";

const useFirebaseStore = () => {
  const addDoc = async (storePath: string, data: WithFieldValue<DocumentData>) => {
    if (!firebaseApp) return;
    return await firebaseAddDoc(collection(getFirestore(firebaseApp), storePath), data);
  };
  const getDocs = async (storePath: string) => {
    if (!firebaseApp) return;
    try {
      const q = query(collection(getFirestore(firebaseApp), storePath));
      const snapshot = await firebaseGetDocs(q);
      snapshot.forEach((doc) => console.log(doc.id, " // ", doc.data()));
      return snapshot;
    } catch (error) {
      console.log(error);
    }
  };

  return { addDoc, getDocs };
};
export default useFirebaseStore;
