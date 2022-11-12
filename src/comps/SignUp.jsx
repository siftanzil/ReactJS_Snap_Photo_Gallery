import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const SignUp = () => {
   const [email, setEmail] = useState( "" );
   const [password, setPassword] = useState( "" );
   const [error, setError] = useState( "" );
   const { createUser } = UserAuth();
   const navigate = useNavigate();

   const handleSubmit = async ( e ) => {
      e.preventDefault();
      setError( "" );
      try {
         await createUser( email, password );
         navigate( "/" );
      } catch ( err ) {
         setError( err.message );
         console.log( err.message );
      }
   };

   return (
      <div className="container col-8">
         <div>
            <h3>Sign up with a new account</h3>
            <p>
               Already have an account? Please{ " " }
               <Link to="/signin" className="underline">
                  Sign in
               </Link>{ " " }
            </p>
         </div>
         <div>
            { error && (
               <p className="alert alert-danger">{ error }</p>
            ) }
         </div>
         <form onSubmit={ handleSubmit }>
            <div className="form-group">
               <label htmlFor="exampleInputEmail1">Email address</label>
               <input
                  onChange={ ( e ) => setEmail( e.target.value ) }
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
               />
               <br />
            </div>
            <div className="form-group">
               <label htmlFor="exampleInputPassword1">Password</label>
               <input
                  onChange={ ( e ) => setPassword( e.target.value ) }
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
               />
            </div>
            <br />
            <button type="submit" className="btn btn-primary">
               Submit
            </button>
         </form>
      </div>
   );
};

export default SignUp;
