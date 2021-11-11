import {discoverMovie} from '../../../../api/routes/movies';
import {getMovies, toggleLoader, updatePagination} from '../actions/creators';

const discoverMovieAsync = (discoverQuery, page) => {
    return (dispatch) => {
        dispatch(toggleLoader())
        discoverMovie(discoverQuery, page)
            .then(response => {
                console.log(response)
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