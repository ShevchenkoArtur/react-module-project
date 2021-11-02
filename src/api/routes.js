import {apiInstance} from './api';

export async function fetchMovies() {
    return await apiInstance.get(`/movie/popular`, {
        params: {
            language: 'en-US',
            page: 1
        }
    })
}
