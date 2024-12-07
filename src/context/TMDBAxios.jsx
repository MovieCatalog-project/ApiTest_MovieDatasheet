import axios from "axios";

export const TMDBBaseAxios = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie"
})

export const TMDBPosterAxios = axios.create({
    baseURL: "https://image.tmdb.org/t/p/original"
})