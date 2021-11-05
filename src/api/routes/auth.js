import {apiInstance} from '../api';

export async function generateToken() {
    return await apiInstance.get('/authentication/token/new')
}

export async function generateSessionId(request_token) {
    return await  apiInstance.post('/authentication/session/new', {request_token})
}

export async function deleteSession(session_id) {
    return await apiInstance.delete('/authentication/session', {
        data: {
            session_id
        }
    })
}


