import {getMovie, toggleLoader} from '../actions/creators';
import {fetchMovie} from '../../../../api/routes';

const getMovieAsync = (id) => {
    return (dispatch) => {
        dispatch(toggleLoader())

        fetchMovie(id)
            .then(response => {
                dispatch(getMovie(response.data))
                dispatch(toggleLoader())
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export default getMovieAsync;