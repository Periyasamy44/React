import React from "react";
import Slideshow from "./slide";

export default function SlideShow() {
    const collection = [
        { src: '/Images/C1.jpg', caption: "Mens Cloths" },
        { src: '/Images/C2.jpg', caption: "Womens Cloths" },
        { src: '/Images/C3.jpg', caption: "Shoe" },
      ];

  return (
    <div>
      <Slideshow
        input={collection}
        ratio={`3:2`}
        mode={`automatic`}
        timeout={`3000`}
      />
    </div>
  );
}
