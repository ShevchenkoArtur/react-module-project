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

export async function fetchFavoriteMovies(accountId, session_id, page) {
    return await apiInstance.get(`/account/${accountId}/favoasdrite/movies`, {
        params: {
            session_id,
            page
        }
    })
}

export async function searchMovie(query, page) {
    return await apiInstance.get('/search/movie', {
        params: {
            page,
            query
        }
    })
}

export async function getMovieAccountState(session_id, movieId) {
    return await apiInstance.get(`/movie/${movieId}/account_states`, {
        params: {
            session_id
        }
    })
}

export async function markAsFavorite(data, session_id, accountId) {
    return await apiInstance.post(`/account/${accountId}/favorite`, data, {
        params: {
            session_id
        }
    })
}

export async function getGenresList() {
    return await apiInstance.get('/genre/movie/list')
}

export async function getLanguagesList() {
    return await apiInstance.get('/configuration/languages')
}

export async function discoverMovie(discoverQuery, page) {
    return await apiInstance.get(`/discover/movie?page=${page}&${discoverQuery}`)
}
