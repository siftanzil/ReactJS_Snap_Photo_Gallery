import { createContext, useContext, useEffect, useState } from "react";
import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
   onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/config.js";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
   const [user, setUser] = useState({});

   const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const logout = () => {
      return signOut(auth);
   };

   const signIn = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   };

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
      });

      return () => unsubscribe();
   }, []);

   return (
      <UserContext.Provider value={{ user, createUser, logout, signIn }}>
         {children}
      </UserContext.Provider>
   );
};

export const UserAuth = () => {
   return useContext(UserContext);
};
