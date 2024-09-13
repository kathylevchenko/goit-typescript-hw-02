import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { ImageType } from "../App/App.types";
import React from "react";

interface ImageGalleryProps{
  items:ImageType[];
onImageClick: (photo: string)=>void;
}
 const ImageGallery: React.FC<ImageGalleryProps> = ({ items, onImageClick }) =>{
  return (
    <ul className={css.imgList}>
      {items.map(({ id, urls, photo }) => (
        <li className={css.listItem} key={id}>
          <ImageCard imgLink={urls} item={photo} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
  }


export default ImageGallery;