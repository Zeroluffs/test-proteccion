import "./styles/image.css";
import React from "react";

function ImageComponent({ image }) {
  return (
    <div className="containerImg">
      <img className="imgResize" alt="resized" src={image} />
    </div>
  );
}

export default ImageComponent;
