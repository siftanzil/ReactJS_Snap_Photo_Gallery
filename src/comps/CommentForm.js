import React from "react";
import { useState } from "react";
import { storeComment } from "../hooks/storeComments";
import { UserAuth } from "../context/AuthContext";

const CommentForm = ({ imgId }) => {
   const [comment, setComment] = useState("");
   const { user } = UserAuth();
   const email = user.email;
   const username = user.email.split("@")[0];

   const handleSubmit = (e) => {
      storeComment(username, email, imgId, comment);
      setComment("");
      e.preventDefault();
   };

   return (
      <div className="container comment-form col-12">
         {user && (
            <form onSubmit={handleSubmit}>
               <div className="form-group row container comment-form">
                  <textarea
                     onChange={(e) => {
                        setComment(e.target.value);
                     }}
                     className="form-control col"
                     rows="2"
                     value={comment}
                     placeholder="comment here"></textarea>
                  <input className="btn btn-dark col-2" type="submit"></input>
               </div>
            </form>
         )}
      </div>
   );
};

export default CommentForm;
