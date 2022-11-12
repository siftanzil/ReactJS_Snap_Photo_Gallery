import React from "react";
import { Route, Routes } from "react-router";
import Account from "./comps/Account";
import ProtectedRoute from "./comps/ProtectedRoute";
import SignIn from "./comps/SignIn";
import SignUp from "./comps/SignUp";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
   return (
      <div className="App">
         <AuthContextProvider>
            <Routes>
               <Route path="/signin" element={<SignIn />} />
               <Route path="/signup" element={<SignUp />} />
               <Route path="/" element={<Account />} />
            </Routes>
         </AuthContextProvider>
      </div>
   );
}

export default App;
