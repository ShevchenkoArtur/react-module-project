import {apiInstance} from '../api';

export async function fetchMovies(page) {
    return await apiInstance.get(`/movie/popular`, {
        params: {
            language: 'en-US',
            page: page
        }
    })
}

export async function fetchMovie(id) {
    return await apiInstance.get(`/movie/${id}`)
}

export async function searchMovie(query) {
    return await apiInstance.get('/search/movie', {
        params: {
            query
        }
    })
}
