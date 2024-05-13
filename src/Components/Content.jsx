import React from "react";

export const Content = () => {

  function ImageWithCircleClipPath({ imageUrl }) {
    return (
      <div className="image-container" style={{ display: "inline-block", marginRight: "30px", position: "relative", zIndex: "0" }}>
        <img
          className="d-block"
          src={imageUrl}
          alt="Slide"
          style={{
            maxHeight: "200px", 
            width: "auto",
            clipPath: "circle(50% at 50% 50%)" 
          }} 
        />
      </div>
    );
  }

  return (
    <div className="d-flex justify-content-center align-items-center flex-column mb-4" style={{ marginTop: "50px" }}>
      <div className="d-flex justify-content-center align-items-center">
        <ImageWithCircleClipPath imageUrl="https://acropolium.com/img/articles/find-backend-developers/img01.jpg" />
        <ImageWithCircleClipPath imageUrl="https://programmerblog.net/wp-content/uploads/2021/02/what-is-front-end-development-3.png" />
      </div>
    </div>
  );
};