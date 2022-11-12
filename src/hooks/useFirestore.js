import { useState } from "react";
import { useEffect } from "react";
import { projectFirestore } from "../firebase/config";
import { query, orderBy, onSnapshot, collection } from "firebase/firestore";

const useFirestore = (collectionName) => {
   const [docs, setDocs] = useState([]);

   useEffect(() => {
      const q = query(
         collection(projectFirestore, collectionName),
         orderBy("createdAt", "desc"),
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
         const documents = [];
         querySnapshot.forEach((doc) => {
            documents.push({ ...doc.data(), id: doc.id });
         });
         setDocs(documents);
      });

      return () => unsubscribe();
   }, [collectionName]);

   return { docs };
};

export default useFirestore;
