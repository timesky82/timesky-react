"use client";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MyImage = () => (
  <div>
    <LazyLoadImage
     
      alt={"alt"}
      height={"height"}
      src={"https://picsum.photos/id/237/800/600"}
      placeholderSrc={"/favicon.ico"}
      width={"200px"}
    />
  </div>
);

export default MyImage;