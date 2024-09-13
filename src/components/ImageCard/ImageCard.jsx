
import css from "./ImageCard.module.css";

export default function ImageCard({ imgLink: {small}, item, onClick }) {
  const handleClick = () => {
    onClick(small);
   
  };
  return (
    <div className={css.imgContainer}>
      <img
        className={css.card}
        src={small}
        alt={item}
        onClick={handleClick}
      />
    </div>
  );
}
