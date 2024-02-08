import {
  DocumentData,
  WithFieldValue,
  addDoc as firebaseAddDoc,
  getDocs as firebaseGetDocs,
  collection,
  getFirestore,
  query as firebaseQuery,
  onSnapshot,
  QuerySnapshot,
  Query,
  where,
  orderBy,
  query,
  QueryConstraint,
  QueryOrderByConstraint,
  QueryCompositeFilterConstraint,
} from "firebase/firestore";
import firebaseApp from "../../libraries/firebase/firebaseApp";

const useFirebaseStore = () => {
  const addDoc = async (storePath: string, data: WithFieldValue<DocumentData>) => {
    if (!firebaseApp) return;
    return await firebaseAddDoc(collection(getFirestore(firebaseApp), storePath), data);
  };
  const getDocsOnSnapshot = async (
    query: Query<DocumentData, DocumentData>,
    callback: (snapshot: QuerySnapshot<DocumentData, DocumentData>) => void
  ) => {
    if (!firebaseApp) return;
    const q = firebaseQuery(query);
    await onSnapshot(q, (querySnapshot) => {
      // querySnapshot.forEach((doc) => console.log(doc.id, " // ", doc.data()));
      callback(querySnapshot);
    });
  };
  const getDocs = async (
    storePath: string,
    orderBy: QueryOrderByConstraint | null,
    compositeFilter: QueryCompositeFilterConstraint | null,
    callback?: (snapshot: QuerySnapshot<DocumentData, DocumentData>) => void
  ) => {
    if (!firebaseApp) return;
    try {
      const q =
        compositeFilter && orderBy
          ? firebaseQuery(collection(getFirestore(firebaseApp), storePath), compositeFilter, orderBy)
          : compositeFilter
          ? firebaseQuery(collection(getFirestore(firebaseApp), storePath), compositeFilter)
          : orderBy
          ? firebaseQuery(collection(getFirestore(firebaseApp), storePath), orderBy)
          : firebaseQuery(collection(getFirestore(firebaseApp), storePath));

      await onSnapshot(q, (querySnapshot) => {
        // querySnapshot.forEach((doc) => console.log(doc.id, " // ", doc.data()));
        callback?.(querySnapshot);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const getCollection = (storePath: string) => (firebaseApp ? collection(getFirestore(firebaseApp), storePath) : null);
  const getDocs_legacy = async (storePath: string) => {
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

  return { getCollection, addDoc, getDocs, getDocsOnSnapshot };
};
export default useFirebaseStore;
