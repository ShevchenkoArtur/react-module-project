import {getMovie} from '../actions/creators';
import {fetchMovie} from '../../../../api/routes/movies';
import {toggleLoader} from '../../page/actions/creators';

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
