import {getMovie} from '../actions/creators';
import {fetchMovie} from '../../../../api/routes/movies';
import {toggleLoader} from '../../page/actions/creators';

const getMovieAsync = (id, history) => {
    return (dispatch) => {
        dispatch(toggleLoader())

        fetchMovie(id)
            .then(response => {
                dispatch(getMovie(response.data))
                dispatch(toggleLoader())
            })
            .catch(error => {
                history.push('/error')
            })
    }
}

export default getMovieAsync;
