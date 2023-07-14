import React, { useState } from 'react';

import state from './store';

const Customizer = () => {

  const [file, setFile] = useState();

  const downloadCanvasToImage = () => {
    const canvas = document.querySelector("canvas");
    const dataURL = canvas.toDataURL();
    const link = document.createElement("a");
  
    link.href = dataURL;
    link.download = "canvas.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const reader = (file_) =>
    new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.readAsDataURL(file_);
    });


  const handleDecals = (result) => {
    state.fullDecal = result;
  }
  const readFile = (file) => {
    setFile(file);
    reader(file)
      .then((result) => {
        handleDecals(result);
      })
  }

  return (
    <>
      <div className='filtertabs-container'>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => readFile(e.target.files[0])}
        />
        <button
          className={`tab-btn rounded-full glassmorphism}`}
          onClick={downloadCanvasToImage}
        >
          download
        </button>


      </div>
    </>
  )
}

export default Customizer