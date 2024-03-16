import css from "./ImageCard.module.css";
const ImageCard = ({ img }) => {
  return (
    <div className={css.imageBlock}>
      <img src={img.urls.small} alt={img.alt_description} width="350" />
    </div>
  );
};

export default ImageCard;
