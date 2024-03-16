import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/search/";
const ACCESS_KEY = "A3nx2FXRqtZH1-4NqfORpOXAK1JQFT9rylzqShlpDlI";

export const getFetchImg = (page, per_page, query) => {
  return `/photos?client_id=${ACCESS_KEY}&page=${page}&per_page=${per_page}&query=${query}`;
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
