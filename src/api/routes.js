import api from "./api";

export async function fetchMovies() {
    try {
        const data = await api.get(`3/movie/popular?api_key=${process.env?.REACT_APP_API_SECRET}&language=en-US&page=1`)
        return data
    } catch (error) {
        console.log(error)
    }
}
