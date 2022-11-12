import React from "react";
import { useState } from "react";
import ProgressBar from "./ProgressBar";

function UploadForm() {
   const [file, setFile] = useState(null);
   const [error, setError] = useState("");
   const [submitted, setSubmitted] = useState(false);
   const [category, setCategory] = useState("");

   const types = ["image/jpg", "image/jpeg", "image/png"];

   const handleChange = (e) => {
      e.preventDefault();
      setError("");
      let selected = e.target.files[0];
      if (selected && types.includes(selected.type)) {
         setFile(selected);
      } else {
         setFile(null);
         setError("Please select an image file(png or jpeg)");
      }
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (category && file) {
         setSubmitted(true);
         setError("");
      } else {
         setFile(null);
         setCategory(null);
         setError("Please select category and image");
      }
   };

   return (
      <div>
         {/*ProgressBar or Error indicator */}
         <div className="output">
            {error && <div className="error">{error}</div>}
            {file && submitted && (
               <ProgressBar
                  file={file}
                  category={category}
                  submitted={submitted}
                  setFile={setFile}
                  setCategory={setCategory}
                  setSubmitted={setSubmitted}
               />
            )}
         </div>
         {/* Image Upload Form */}
         <form onSubmit={handleSubmit} className="uploadForm">
            <div className="input-group">
               <input
                  onChange={handleChange}
                  type="file"
                  className="form-control w-50"
                  id="inputGroupFile02"
               />
               <select
                  onClick={(e) => {
                     setError("");
                     setCategory(e.target.value);
                  }}
                  className="form-control">
                  <option value="">Category</option>
                  <option>Nature</option>
                  <option>Portrait</option>
                  <option>Auto</option>
                  <option>Urban</option>
                  <option>Random</option>
               </select>
               <button type="submit" className="btn w-20 btn-success">
                  Upload
               </button>
            </div>
         </form>
      </div>
   );
}

export default UploadForm;
