import {fetchFavoriteMovies} from '../../../../api/routes/movies';
import {getFavoriteMovies} from '../actions/creators';
import {toggleLoader, updatePagination} from '../../page/actions/creators';

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
                window.location.href = '/error'
            })
    }
}

export default getFavoriteMoviesAsync;
