import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ items, onImageClick }) {
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