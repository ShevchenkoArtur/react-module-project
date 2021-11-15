import {deleteSession} from '../../../../api/routes/auth';
import {logout} from '../actions/creators';
import {toggleLoader} from '../../page/actions/creators';

const deleteSessionAsync = (sessionId, history) => {
    return (dispatch) => {
        dispatch(toggleLoader())
        deleteSession(sessionId)
            .then(res => {
                localStorage.setItem('session_id', '')
                localStorage.setItem('user_account', '')
                dispatch(logout())
                dispatch(toggleLoader())
            })
            .catch(error => {
                history.push('/error')
            })
    }
}

export default deleteSessionAsync;
