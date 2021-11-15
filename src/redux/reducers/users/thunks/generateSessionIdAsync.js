import {generateSessionId} from '../../../../api/routes/auth';
import {getSessionId} from '../actions/creators';
import {toggleLoader} from '../../page/actions/creators';
import getAccountAsync from "./getAccountAsync";

const generateSessionIdAsync = (requestToken) => {
    return (dispatch) => {
        dispatch(toggleLoader())
        generateSessionId(requestToken)
            .then(res => {
                localStorage.setItem('session_id', res.data.session_id)
                dispatch(getSessionId(res.data.session_id))
                dispatch(getAccountAsync(res.data.session_id))
            })
            .catch(error => {
                window.location.href = '/error'
            })
    }
}

export default generateSessionIdAsync;
