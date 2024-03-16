// import css from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal = ({
  closeModal,
  modalIsOpen,
  imgSrc = "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg",
  imgAltDescription = "Regular gallery image",
  imgDescription = "Big image",
  imgAuthor = "Unknow",
  imgLikes = 0,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
    >
      <div>
        <div>
          <img src={imgSrc} alt={imgAltDescription} />
        </div>
        <div>{imgDescription}</div>
        <ul>
          <li>Author: {imgAuthor}</li>
          <li>Likes: {imgLikes}</li>
        </ul>
      </div>
    </Modal>
  );
};

export default ImageModal;
