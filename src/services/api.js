import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const ACCESS_KEY = "A3nx2FXRqtZH1-4NqfORpOXAK1JQFT9rylzqShlpDlI";

export const getFetchImg = async (page, per_page, query) => {
  try {
    const response = await axios.get("/search/photos", {
      params: {
        client_id: ACCESS_KEY,
        page: page,
        per_page: per_page,
        query: query,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch images from Unsplash API");
  }
};
// export const respImg = async () => {
//   const response = await axios.get("photos", {
//     params: {
//       client_id: ACCESS_KEY,
//       query: query,
//       per_page: 10,
//       page: page,
//     },
//   });
