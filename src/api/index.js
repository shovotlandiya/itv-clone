import axios from "axios";

const user = "user=a7e1c53165089055120e1a6ffaa1ec27";

const http = axios.create({ baseURL: "https://api.itv.uz/api/content/main/2" });

export default http;

export const getMoviesList = (page) => http.get(`/list?${user}&page=${page}`);

export const getMovieDetails = (id) => http.get(`/show/${id}?${user}`);
