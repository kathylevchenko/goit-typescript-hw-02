import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const getImages = async (setSearchQuery, setPage) => {
    const response = await axios.get(`/search/photos`, {
      params: {
        query: setSearchQuery,
        client_id: 'WQ_kyEGrivFE-iZKI-hDs1Iop9iXBTo2Ie9-i9Fyyt0',
        page: setPage,
        per_page: 12,
      },
    });
    return response.data;
  }

  export default getImages;