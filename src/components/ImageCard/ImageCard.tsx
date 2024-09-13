
import css from "./ImageCard.module.css";

interface ImageCardProps{
  imgLink: {
    small: string;}
  item: string;
  onClick:(photo:string)=>void;
}
const ImageCard: React.FC<ImageCardProps>=({ imgLink: {small}, item, onClick })=> {
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


export default ImageCard;