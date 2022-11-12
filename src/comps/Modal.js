import React from "react";
import { motion } from "framer-motion";
import CommentForm from "./CommentForm";
import LoadComments from "./LoadComments";
import { UserAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Modal = ({ setSelectedImg, selectedImg, imgId }) => {
   const { user } = UserAuth();
   const handleClick = (e) => {
      if (e.target.classList.contains("backdrop")) {
         setSelectedImg(null);
      }
   };

   return (
      <div className="row container">
         <motion.div
            className="backdrop d-flex justify-content-center col-12"
            onClick={handleClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}>
            <motion.img
               src={selectedImg}
               alt="enlarged pic"
               initial={{ y: "-100vh" }}
               animate={{ y: 0 }}
            />
            <LoadComments imgId={imgId} />
            {user && <CommentForm imgId={imgId} />}
         </motion.div>
         {!user && (
            <div className="col-12 comment-form ">
               <div className="container">
                  <div className="card text-white bg-dark mb-3">
                     <div className="card-body">
                        <p className="card-text">
                           <Link to="/signin" className="underline">
                              Sign in
                           </Link>
                           {" to comment"}
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default Modal;
