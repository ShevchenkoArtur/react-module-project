import {getMovieAccountState} from '../../../../api/routes/movies';
import {updateMovieAccountStates} from '../actions/creators';

const getMovieAccountStateAsync = (sessionId, movieId) => {
    return (dispatch) => {
        getMovieAccountState(sessionId, movieId)
            .then(response => {
                dispatch(updateMovieAccountStates(response.data))
            })
            .catch(error => {
                window.location.href = '/error'
            })
    }
}

export default getMovieAccountStateAsync;
