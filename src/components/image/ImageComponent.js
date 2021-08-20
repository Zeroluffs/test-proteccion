import "./styles/image.css";
import React from "react";

function ImageComponent({ image }) {
  console.log(image);
  return (
    <div className="containerImg">
      <img className="imgResize" alt="" src={image} />
    </div>
  );
}

export default ImageComponent;
