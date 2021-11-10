import {discoverMovie} from '../../../../api/routes/movies';
import {getMovies, sortMovieBy, toggleLoader, updatePagination} from '../actions/creators';

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
                console.log(error)
            })
    }
}

export default discoverMovieAsync;