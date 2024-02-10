import { useEffect, useState } from "react";
import useFirestore from "./useFirestore";
import { QueryOrderByConstraint } from "firebase/firestore";
import { ICustomDocumentData } from "../../types/customTypes";

const useFirestoreFetch = (storePath: string, orderBy: QueryOrderByConstraint) => {
  const { firebaseGetDocsRealtime } = useFirestore();
  const [docs, setDocs] = useState<ICustomDocumentData[]>([]);
  const refreshDocs = async () => {
    firebaseGetDocsRealtime(storePath, orderBy, null, (snapshot) => {
      if (!snapshot) return;

      const list: ICustomDocumentData[] = [];
      snapshot.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });

      setDocs(list);
    });
  };
  useEffect(() => {
    refreshDocs();
  }, []);
  return { docs };
};

export default useFirestoreFetch;
