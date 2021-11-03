import {fetchMovies} from "../../../../api/routes";
import {getMovies, toggleLoader, updatePagination} from "../actions/creators";

const getMoviesAsync = (page) => {
    return (dispatch) => {
        dispatch(toggleLoader())

        fetchMovies(page)
            .then(response => {
                dispatch(updatePagination(response.data.total_pages, response.data.page))
                dispatch(toggleLoader())
                dispatch(getMovies(response.data.results))
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export default getMoviesAsync;