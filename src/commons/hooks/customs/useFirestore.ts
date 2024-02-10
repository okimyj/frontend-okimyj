import {
  DocumentData,
  WithFieldValue,
  addDoc,
  getDocs,
  collection,
  getFirestore,
  query,
  onSnapshot,
  QuerySnapshot,
  QueryOrderByConstraint,
  QueryCompositeFilterConstraint,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import firebaseApp from "../../libraries/firebase/firebaseApp";

const useFirestore = () => {
  const getCollection = (storePath: string) => collection(getFirestore(firebaseApp), storePath);
  const getDoc = (storePath: string, collectionPath: string) =>
    doc(getFirestore(firebaseApp), storePath, collectionPath);
  const firebaseAddDoc = async (storePath: string, data: WithFieldValue<DocumentData>) => {
    return await addDoc(getCollection(storePath), data);
  };
  const firebaseUpdateDoc = async (storePath: string, collectionPath: string, data: WithFieldValue<DocumentData>) => {
    return await updateDoc(getDoc(storePath, collectionPath), data);
  };
  const firebaseDeleteDoc = async (storePath: string, collectionPath: string) => {
    return await deleteDoc(getDoc(storePath, collectionPath));
  };

  const firebaseGetDocsRealtime = async (
    storePath: string,
    orderBy: QueryOrderByConstraint | null,
    compositeFilter: QueryCompositeFilterConstraint | null,
    callback?: (snapshot: QuerySnapshot<DocumentData, DocumentData>) => void
  ) => {
    const collection = getCollection(storePath);
    try {
      const q =
        compositeFilter && orderBy
          ? query(collection, compositeFilter, orderBy)
          : compositeFilter
          ? query(collection, compositeFilter)
          : orderBy
          ? query(collection, orderBy)
          : query(collection);

      await onSnapshot(q, (querySnapshot) => {
        callback?.(querySnapshot);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const firebaseGetDocs = async (storePath: string) => {
    if (!firebaseApp) return;
    try {
      const q = query(collection(getFirestore(firebaseApp), storePath));
      const snapshot = await getDocs(q);
      snapshot.forEach((doc) => console.log(doc.id, " // ", doc.data()));
      return snapshot;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getCollection,
    firebaseAddDoc,
    firebaseUpdateDoc,
    firebaseDeleteDoc,
    firebaseGetDocs,
    firebaseGetDocsRealtime,
  };
};
export default useFirestore;
