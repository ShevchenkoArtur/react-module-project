import {discoverMovie} from '../../../../api/routes/movies';
import {getMovies} from '../actions/creators';
import {toggleLoader, updatePagination} from '../../page/actions/creators';

const discoverMovieAsync = (discoverQuery, page, history) => {
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
                history.push('/error')
            })
    }
}

export default discoverMovieAsync;
