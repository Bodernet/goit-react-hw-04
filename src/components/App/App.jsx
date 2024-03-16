// import "./App.module.css";

import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import axios from "axios";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

axios.defaults.baseURL = "https://api.unsplash.com/search/";
const ACCESS_KEY = "A3nx2FXRqtZH1-4NqfORpOXAK1JQFT9rylzqShlpDlI";

function App() {
  const [page, setPage] = useState(1);
  const [query, setSearchQuery] = useState("");
  const [imageGallery, setImageGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imageModalData, setImageModalData] = useState({
    imgSrc: "",
    imgDescription: "",
    imgAltDescription: "",
    imgAuthor: "",
    imgLikes: 0,
  });

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (!query) return;
    async function fetchImages() {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await axios.get("photos", {
          params: {
            client_id: ACCESS_KEY,
            query: query,
            per_page: 10,
            page: 1,
          },
        });
        const data = response.data;
        setImageGallery((prevImages) => [...prevImages, ...data.results]);

        setShowBtn(page < data.total_pages);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
        // setShowBtn(true);
        if (page > 1) {
          window.scrollBy({
            top: window.innerHeight - 200,
            left: 0,
            behavior: "smooth",
          });
        }
      }
    }
    fetchImages();
  }, [query, page]);

  const onSetSearchQuery = (query) => {
    setSearchQuery(query);
    setPage(1);
    setImageGallery([]);
  };
  const onNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const handleImageClick = (img) => {
    setImageModalData(img);
    openModal();
  };

  return (
    <div>
      <SearchBar onSetSearchQuery={onSetSearchQuery} />
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      <ImageGallery
        imageGallery={imageGallery}
        handleImageClick={handleImageClick}
      />
      <ImageModal
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        {...imageModalData}
      />
      {showBtn && <LoadMoreBtn onLoadMore={onNextPage} />}
    </div>
  );
}

export default App;
