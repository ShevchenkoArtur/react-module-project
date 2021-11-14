import React, {useEffect} from 'react';
import {getSessionId} from '../../../../redux/reducers/users/actions/creators';
import generateSessionIdAsync from '../../../../redux/reducers/users/thunks/generateSessionIdAsync';
import getAccountAsync from '../../../../redux/reducers/users/thunks/getAccountAsync';
import {useDispatch, useSelector} from 'react-redux';
import {useLocation} from 'react-router-dom';
import Movies from '../../Movies/Movies';

const AccountConnect = () => {
    const {isLoading} = useSelector(state => state.page)
    const {sessionId, userAccount} = useSelector(state => state.users)
    const dispatch = useDispatch()
    const urlParams = useLocation().search

    useEffect(() => {
        const requestToken = new URLSearchParams(urlParams).get('request_token')
        if (localStorage.getItem('session_id') && !sessionId) {
            dispatch(getSessionId(localStorage.getItem('session_id')))
        }

        if (requestToken && !localStorage.getItem('session_id')) {
            dispatch(generateSessionIdAsync(requestToken))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (!userAccount && sessionId) {
            dispatch(getAccountAsync(sessionId))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <>
            {
                !isLoading && <Movies/>
            }
        </>

    )
}

export default AccountConnect;
