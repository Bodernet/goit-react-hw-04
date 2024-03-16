// import css from "./ImageModal.module.css";
import Modal from "react-modal";

const ImageModal = ({
  closeModal,
  modalIsOpen,
  imgSrc = "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg",
  imgAltDescription = "Regular gallery image",
  imgDescription = "Big image",
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
      </div>
    </Modal>
  );
};

export default ImageModal;
