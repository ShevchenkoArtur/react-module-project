import {searchFilm, toggleLoader, updatePagination} from '../actions/creators';
import {searchMovie} from '../../../../api/routes/movies';

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
                console.log(error)
            })
    }
}

export default searchMovieAsync;