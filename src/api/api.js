import axios from "axios";

const baseMovieUrl = 'https://api.themoviedb.org/3'
export const baseImgUrl = 'https://image.tmdb.org/t/p/w500'

export const apiInstance = axios.create({
    baseURL: baseMovieUrl,
    params: {
        api_key: process.env?.REACT_APP_API_SECRET
    }
})

