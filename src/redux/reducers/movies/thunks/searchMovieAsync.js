import {searchFilm} from '../actions/creators';
import {searchMovie} from '../../../../api/routes/movies';
import {toggleLoader, updatePagination} from '../../page/actions/creators';

const searchMovieAsync = (query, page) => {
    return (dispatch) => {
        dispatch(toggleLoader())
        searchMovie(query, page)
            .then(response => {
                dispatch(updatePagination(response.data.total_pages, response.data.page))
                dispatch(searchFilm(response.data.results))
                dispatch(toggleLoader())
            })
            .catch(error => {
                window.location.href = '/error'
            })
    }
}

export default searchMovieAsync;
