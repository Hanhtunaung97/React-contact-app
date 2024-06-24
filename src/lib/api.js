import axios from "axios";
import { API_ENDPOINTS } from "./constant";

export const api = axios.create({
  baseURL: API_ENDPOINTS,
});
