import {getAccount} from '../../../../api/routes/auth';
import {getUserAccount} from '../actions/creators';
import {toggleLoader} from '../../movies/actions/creators';

const getAccountAsync = (sessionId) => {
    return (dispatch) => {
        dispatch(toggleLoader())
        getAccount(sessionId)
            .then(response => {
                dispatch(toggleLoader())
                dispatch(getUserAccount(response.data))
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export default getAccountAsync;