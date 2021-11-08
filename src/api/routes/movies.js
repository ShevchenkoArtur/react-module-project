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
    return await apiInstance.get(`/account/${accountId}/favorite/movies`, {
        params: {
            session_id,
            page
        }
    })
}

export async function searchMovie(query) {
    return await apiInstance.get('/search/movie', {
        params: {
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
