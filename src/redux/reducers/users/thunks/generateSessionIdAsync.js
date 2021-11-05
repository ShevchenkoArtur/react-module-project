import {generateSessionId} from '../../../../api/routes/auth';
import {getSessionId} from '../actions/creators';

const generateSessionIdAsync = (requestToken) => {
    return (dispatch) => {
        generateSessionId(requestToken)
            .then(res => {
                localStorage.setItem('session_id', res.data.session_id)
                dispatch(getSessionId(res.data.session_id))
            })
    }
}

export default generateSessionIdAsync;