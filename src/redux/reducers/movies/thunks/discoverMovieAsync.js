import {discoverMovie} from '../../../../api/routes/movies';
import {getMovies} from '../actions/creators';
import {toggleLoader, updatePagination} from '../../page/actions/creators';

const discoverMovieAsync = (discoverQuery, page) => {
    return (dispatch) => {
        dispatch(toggleLoader())
        discoverMovie(discoverQuery, page)
            .then(response => {
                dispatch(updatePagination(response.data.total_pages, response.data.page))
                dispatch(getMovies(response.data.results))
                dispatch(toggleLoader())
            })
            .catch(error => {
                window.location.href = '/error'
            })
    }
}

export default discoverMovieAsync;
