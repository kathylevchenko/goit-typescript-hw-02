import { useEffect, useState } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import  getImages  from "../images-api";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import { ImageType } from "./App.types";



export default function App() {
  const [images, setImages] = useState<ImageType[]>([]);
  const [error, setError] = useState<boolean|null>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [totalPage, setTotalPage] = useState<boolean>(false);
 const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
 const [selectedImageUrl, setSelectedImageUrl] = useState<string>("");

  
  useEffect(() => {
    if (searchQuery.trim() === "") {
      return;
    }
  
    async function fetchImages():Promise<void>{
      try {
        setLoading(true);
        setError(false);
        const { results, total } = await getImages(searchQuery, page);
       if(results.length === 0){
        setError(true);
       }else
        setImages((prevState) => [...prevState, ...results]);
         setTotalPage(page < Math.ceil(total / 15));
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [searchQuery, page]);

  const handleSearch = async (searchImg:string) => {
    setSearchQuery(searchImg);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = async () : Promise<void>=> {
    setPage(page + 1);
   
  };

    const openModal = (imageUrl:string) => {
      setSelectedImageUrl(imageUrl);
      setModalIsOpen(true);
    };

  const closeModal = () :void => {
      setSelectedImageUrl("");
      setModalIsOpen(false);
  };


  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      {error && <ErrorMessage />}

      {images.length > 0 && (
        <ImageGallery items={images} onImageClick={openModal} />
      )}
      {totalPage && <LoadMoreBtn onClick={handleLoadMore} />}

      {loading && <Loader />}

   
      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        imageUrl={selectedImageUrl}
      />
    </div>
  );
}
