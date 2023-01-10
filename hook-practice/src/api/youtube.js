import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  param: API_KEY,
});
