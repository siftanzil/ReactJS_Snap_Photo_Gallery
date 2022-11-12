import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Title = () => {
   const { user, logout } = UserAuth();
   const navigate = useNavigate();
   const handleSignout = async () => {
      try {
         await logout();
         navigate("/signin");
      } catch (err) {
         console.log(err.message);
      }
   };

   return (
      <div className="container-flex">
         <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
               <h1>SNAPS</h1>
            </a>
            <button
               onClick={handleSignout}
               type="button"
               className="btn btn-outline-danger">
               {user && user.email}
               {!user && (
                  <Link to="/signin" className="underline">
                     Sign in
                  </Link>
               )}
            </button>
         </nav>
      </div>
   );
};

export default Title;
