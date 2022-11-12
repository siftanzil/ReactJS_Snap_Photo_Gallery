import React from "react";
import Main from "./Main";
import { UserAuth } from "../context/AuthContext";

const Account = () => {
   const user = UserAuth();
   return (
      <div>
         <Main user={user} />
      </div>
   );
};

export default Account;
