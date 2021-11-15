import {fetchMovies} from "../../../../api/routes/movies";
import {getMovies} from "../actions/creators";
import {toggleLoader, updatePagination} from '../../page/actions/creators';

const getMoviesAsync = (page) => {
    return (dispatch) => {
        dispatch(toggleLoader())
        fetchMovies(page)
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

export default getMoviesAsync;
