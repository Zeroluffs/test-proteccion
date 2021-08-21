import "./styles/image.css";
import React from "react";

function ImageComponent({ image, horizontal }) {
  if (horizontal) {
    return (
      <div className="containerImgHorizontal">
        <img className="imgResize" alt="resized" src={image} />
      </div>
    );
  }

  return (
    <div className="containerImgVertical">
      <img className="imgResize" alt="resized" src={image} />
    </div>
  );
}

export default ImageComponent;
