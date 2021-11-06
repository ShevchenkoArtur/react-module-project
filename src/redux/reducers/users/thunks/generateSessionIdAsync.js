import {generateSessionId} from '../../../../api/routes/auth';
import {getSessionId} from '../actions/creators';
import {toggleLoader} from '../../movies/actions/creators';

const generateSessionIdAsync = (requestToken) => {
    return (dispatch) => {
        dispatch(toggleLoader())
        generateSessionId(requestToken)
            .then(res => {
                dispatch(toggleLoader())
                localStorage.setItem('session_id', res.data.session_id)
                dispatch(getSessionId(res.data.session_id))
            })
    }
}

export default generateSessionIdAsync;