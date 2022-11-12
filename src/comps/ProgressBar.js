import React, { useEffect } from "react";
import useStorage from "./../hooks/useStorage";
import { motion } from "framer-motion";

const ProgressBar = ( {
   file,
   category,
   submitted,
   setFile,
   setCategory,
   setSubmitted,
} ) => {
   const { url, progress } = useStorage( file, category, submitted );

   useEffect( () => {
      if ( url ) {
         setFile( null );
         setCategory( null );
         setSubmitted( false );
      }
   }, [url, setFile, setCategory, setSubmitted] );

   return (
      <div
         className="progress">
         <motion.div className="progress-bar bg-danger" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
            initial={ { width: 0 } }
            animate={ { width: progress + "%" } }></motion.div>
      </div>
   );
};

export default ProgressBar;
