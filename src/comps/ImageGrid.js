import React, { useEffect, useMemo, useState } from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ selectedCategory, setSelectedImg, setImgId }) => {
   const { docs } = useFirestore("images");

   const getFilteredDocs = () => {
      if (selectedCategory === "All" || null || undefined || "") {
         return docs;
      }
      return docs.filter((doc) => doc.category == selectedCategory);
   };
   let filteredDocs = useMemo(getFilteredDocs, [selectedCategory, docs]);

   return (
      <div className="img-grid container">
         {filteredDocs &&
            filteredDocs.map((doc) => (
               <motion.div
                  className="img-wrap img-fluid"
                  key={doc.id}
                  layout
                  whileHover={{ opacity: 1 }}
                  onClick={() => {
                     setSelectedImg(doc.url);
                     setImgId(doc.id);
                  }}>
                  <motion.img
                     src={doc.url}
                     alt="uploaded pic"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 1 }}
                  />
               </motion.div>
            ))}
      </div>
   );
};

export default ImageGrid;
