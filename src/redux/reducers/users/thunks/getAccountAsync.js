import {getAccount} from '../../../../api/routes/auth';
import {getUserAccount} from '../actions/creators';
import {toggleLoader} from '../../page/actions/creators';

const getAccountAsync = (sessionId) => {
    return (dispatch) => {
        getAccount(sessionId)
            .then(response => {
                dispatch(getUserAccount(response.data))
                localStorage.setItem('user_account', JSON.stringify(response.data))
                dispatch(toggleLoader())
            })
            .catch(error => {
                window.location.href = '/error'
            })
    }
}

export default getAccountAsync;
