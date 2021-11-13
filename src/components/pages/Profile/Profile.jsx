import React, {useEffect} from 'react';
import {Container, Typography} from '@mui/material';
import Box from '@mui/material/Box';
import {baseImgUrl} from '../../../api/api';
import {useDispatch, useSelector} from 'react-redux';
import style from './Profile.module.css'
import getAccountAsync from '../../../redux/reducers/users/thunks/getAccountAsync';
import {getSessionId} from '../../../redux/reducers/users/actions/creators';
import Loader from '../../UI/Loader/Loader';

const Profile = () => {
    const {isLoading} = useSelector(state => state.movies)
    const {userAccount, sessionId} = useSelector(state => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!userAccount) {
            if (!sessionId) {
                dispatch(getSessionId(localStorage.getItem('session_id')))
            }
            dispatch(getAccountAsync(sessionId))
        }
    }, [dispatch, sessionId, userAccount])


    const bgPhoto = {
        background: `no-repeat center/cover grey url(${baseImgUrl}${userAccount?.avatar.tmdb.avatar_path})`
    }

    return (
        <>
            {
                isLoading
                    ?
                    <Loader/>
                    :
                    <Box style={bgPhoto} className={style.profile}>
                        <Box style={{zIndex: 1, display: 'flex', height: '100%'}}>
                            <Container style={{display: 'flex'}}>
                                <Box style={{borderRadius: '50%', ...bgPhoto}} width='200px' height='200px' mt={3}/>
                                <Box mt={3} ml={2} style={{color: '#fff'}}>
                                    <Typography fontWeight='bold'>{userAccount?.name}</Typography>
                                    <Typography>{userAccount?.username}</Typography>
                                </Box>
                            </Container>
                        </Box>
                    </Box>
            }
        </>
    )
}

export default Profile;