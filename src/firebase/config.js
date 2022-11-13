import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
   authDomain: "sif-react-firegram.firebaseapp.com",
   projectId: "sif-react-firegram",
   storageBucket: "sif-react-firegram.appspot.com",
   messagingSenderId: "1008095348857",
   appId: "1:1008095348857:web:18b95831ae8941d2dbeca8",
   databaseURL: "https://sif-react-firegram-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);
const projectDatabase = getDatabase(app);
const auth = getAuth(app);

export { projectStorage, projectFirestore, auth, projectDatabase };
