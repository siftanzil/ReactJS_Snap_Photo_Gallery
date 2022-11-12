import React, { useState } from "react";
import Title from "./Title";
import UploadForm from "./UploadForm";
import Navbar from "./Navbar";

const Main = (user) => {
   return (
      <div>
         <Title user={user} />
         <UploadForm />
         <Navbar />
      </div>
   );
};

export default Main;
