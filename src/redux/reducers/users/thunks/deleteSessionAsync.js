import {deleteSession} from '../../../../api/routes/auth';
import {logout} from '../actions/creators';

const deleteSessionAsync = (sessionId) => {
    return (dispatch) => {
        deleteSession(sessionId)
            .then(res => {
                console.log(res)
                localStorage.setItem('session_id', '')
                dispatch(logout())
            })
    }
}

export default deleteSessionAsync;