import {searchFilm, toggleLoader} from '../actions/creators';
import {searchMovie} from '../../../../api/routes';

const searchMovieAsync = (query) => {
    return (dispatch) => {
        dispatch(toggleLoader())
        searchMovie(query)
            .then(response => {
                dispatch(searchFilm(response.data.results))
                dispatch(toggleLoader())
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export default searchMovieAsync;