import {getMovieAccountState} from '../../../../api/routes/movies';
import {updateMovieAccountStates} from '../actions/creators';

const getMovieAccountStateAsync = (sessionId, movieId, history) => {
    return (dispatch) => {
        getMovieAccountState(sessionId, movieId)
            .then(response => {
                dispatch(updateMovieAccountStates(response.data))
            })
            .catch(error => {
                history.push('/error')
            })
    }
}

export default getMovieAccountStateAsync;
