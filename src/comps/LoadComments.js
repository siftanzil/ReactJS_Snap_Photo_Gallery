import { ref, onValue } from "firebase/database";
import React from "react";
import { useState } from "react";
import { projectDatabase } from "../firebase/config";

const LoadComments = ({ imgId }) => {
   const [username, setUsername] = useState("");
   const [comment, setComment] = useState("");
   const commentRef = ref(projectDatabase, imgId);

   setTimeout((e) => {
      onValue(commentRef, (snapshot) => {
         const data = snapshot.val();
         if (data) {
            setUsername(data.username);
            setComment(data.comments.comment);
         }
      });
   }, 500);

   return (
      <div className="comments container">
         <div className="card text-white bg-dark mb-3">
            <div className="card-header">Comments</div>
            <div className="card-body">
               <h5 className="card-title">{username}</h5>
               <p className="card-text">{comment}</p>
            </div>
         </div>
      </div>
   );
};

export default LoadComments;
