import React, { useEffect, useState, getAttribute } from "react";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";

const Navbar = () => {
   const [selectedCategory, setSelectedCategory] = useState("All");
   const [selectedImg, setSelectedImg] = useState("");
   const [imgId, setImgId] = useState("");

   const handleCategoryChange = (e) => {
      setSelectedCategory(e.target.getAttribute("value"));
      console.log(e.target.getAttribute("value"));
   };

   return (
      <div>
         <ul className="nav nav-tabs nav-fill ">
            <li className="nav-item">
               <a
                  className="nav-link"
                  aria-current="page"
                  href="#"
                  value="All"
                  onClick={handleCategoryChange}>
                  All
               </a>
            </li>
            <li className="nav-item">
               <a
                  className="nav-link"
                  href="#"
                  value="Nature"
                  onClick={handleCategoryChange}>
                  Nature
               </a>
            </li>
            <li className="nav-item">
               <a
                  className="nav-link"
                  href="#"
                  value="Auto"
                  onClick={handleCategoryChange}>
                  Auto
               </a>
            </li>

            <li className="nav-item">
               <a
                  className="nav-link"
                  href="#"
                  value="Portrait"
                  onClick={handleCategoryChange}>
                  Portrait
               </a>
            </li>
            <li className="nav-item">
               <a
                  className="nav-link"
                  href="#"
                  value="Urban"
                  onClick={handleCategoryChange}>
                  Urban
               </a>
            </li>
            <li className="nav-item">
               <a
                  className="nav-link"
                  href="#"
                  value="Random"
                  onClick={handleCategoryChange}>
                  Random
               </a>
            </li>
         </ul>
         <ImageGrid
            selectedCategory={selectedCategory}
            setSelectedImg={setSelectedImg}
            setImgId={setImgId}
         />
         {selectedImg && (
            <Modal
               selectedImg={selectedImg}
               setSelectedImg={setSelectedImg}
               imgId={imgId}
            />
         )}
      </div>
   );
};

export default Navbar;
