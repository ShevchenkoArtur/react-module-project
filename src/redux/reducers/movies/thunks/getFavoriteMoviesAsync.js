import {fetchFavoriteMovies} from '../../../../api/routes/movies';
import {getFavoriteMovies} from '../actions/creators';
import {toggleLoader, updatePagination} from '../../page/actions/creators';

const getFavoriteMoviesAsync = (accountId, sessionId, page, history) => {
    return (dispatch) => {
        dispatch(toggleLoader())
        fetchFavoriteMovies(accountId, sessionId, page)
            .then(response => {
                dispatch(updatePagination(response.data.total_pages, response.data.page))
                dispatch(getFavoriteMovies(response.data.results))
                dispatch(toggleLoader())
            })
            .catch(error => {
                history.push('/error')
            })
    }
}

export default getFavoriteMoviesAsync;
