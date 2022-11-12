import { useState, useEffect } from "react";
import { projectStorage, projectFirestore } from "../firebase/config";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const useStorage = (file, category, submitted) => {
   const [progress, setProgress] = useState(0);
   const [error, setError] = useState(null);
   const [url, setUrl] = useState(null);

   useEffect(() => {
      const storageRef = ref(projectStorage, `${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      const collectionRef = collection(projectFirestore, "images");

      uploadTask.on(
         "state_changed",
         (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
         },
         (err) => {
            setError(err);
         },
         () => {
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
               console.log(uploadTask.snapshot.ref);
               setUrl(url);
               let imgId = uploadTask.snapshot.ref.name.split(".")[0];
               let createdAt = Timestamp.now().toDate();
               addDoc(collectionRef, { url, createdAt, category, imgId });
            });
         },
      );
   }, [submitted]);

   return { progress, url, error };
};

export default useStorage;
