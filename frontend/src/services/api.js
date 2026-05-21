import axios from "axios";

const api = axios.create({
  baseURL: "https://trouve-ton-artisan-zma6.onrender.com/api",
});

export default api;