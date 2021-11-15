import {searchFilm} from '../actions/creators';
import {searchMovie} from '../../../../api/routes/movies';
import {toggleLoader, updatePagination} from '../../page/actions/creators';

const searchMovieAsync = (query, page, history) => {
    return (dispatch) => {
        dispatch(toggleLoader())
        searchMovie(query, page)
            .then(response => {
                dispatch(updatePagination(response.data.total_pages, response.data.page))
                dispatch(searchFilm(response.data.results))
                dispatch(toggleLoader())
            })
            .catch(error => {
                history.push('/error')
            })
    }
}

export default searchMovieAsync;
