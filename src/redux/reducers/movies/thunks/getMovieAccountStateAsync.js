import {getMovieAccountState} from '../../../../api/routes/movies';
import {toggleLoader, updateMovieAccountStates} from '../actions/creators';

const getMovieAccountStateAsync = (sessionId, movieId) => {
    return (dispatch) => {
        getMovieAccountState(sessionId, movieId)
            .then(response => {
                dispatch(updateMovieAccountStates(response.data))
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export default getMovieAccountStateAsync;