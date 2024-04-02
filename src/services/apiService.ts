import axios from "axios";
import URL from "./httpService";

const axiosInstance = axios.create({
  baseURL: URL,
  withCredentials: true
})

export default axiosInstance;