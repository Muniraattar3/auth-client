import axios from "axios";

const api = axios.create({
  baseURL: "https://user-management-api-4mu3.onrender.com/",
});

export default api;
