import { image } from "faker";
import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = (props) => {
  const imageURLS = props.images.map((image) => {
    //add unique key to the list of items for performance optimization in rerendering JSX by react
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{imageURLS}</div>;
};

export default ImageList;
