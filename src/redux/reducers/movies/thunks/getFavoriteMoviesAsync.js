import {fetchFavoriteMovies} from '../../../../api/routes/movies';
import {getFavoriteMovies, toggleLoader, updatePagination} from '../actions/creators';

const getFavoriteMoviesAsync = (accountId, sessionId, page) => {
    return (dispatch) => {
        dispatch(toggleLoader())
        fetchFavoriteMovies(accountId, sessionId, page)
            .then(response => {
                dispatch(updatePagination(response.data.total_pages, response.data.page))
                dispatch(getFavoriteMovies(response.data.results))
                dispatch(toggleLoader())
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export default getFavoriteMoviesAsync;