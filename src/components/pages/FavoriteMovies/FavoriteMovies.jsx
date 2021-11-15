import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import getFavoriteMoviesAsync from '../../../redux/reducers/movies/thunks/getFavoriteMoviesAsync';
import MoviesPagination from '../../MoviesPagination/MoviesPagination';
import {Container} from '@mui/material';
import MoviesList from '../../MoviesList/MoviesList';
import Box from '@mui/material/Box';
import style from './FavoritesMovies.module.css'
import SimpleSnackbar from '../../UI/SimpleSnackbar/SimpleSnackbar';
import Loader from '../../UI/Loader/Loader';
import {useHistory} from 'react-router-dom';

const FavoriteMovies = () => {
    const dispatch = useDispatch()
    const {isLoading} = useSelector(state => state.page)
    const {favoriteMovies} = useSelector(state => state.movies)
    const {userAccount, sessionId} = useSelector(state => state.users)
    const history = useHistory()

    useEffect(() => {
        // if (!favoriteMovies.length) {
        if (sessionId) {
            dispatch(getFavoriteMoviesAsync(userAccount?.id, sessionId, history))
        } else {
            dispatch(getFavoriteMoviesAsync(userAccount?.id, localStorage.getItem('session_id'), history))
        }
        // }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container>
            <SimpleSnackbar/>
            <Box className={style.contentBox}>
                <Box className={style.moviesBox}>
                    {
                        isLoading
                            ?
                            <Loader/>
                            :
                            <MoviesList moviesArr={favoriteMovies}/>
                    }

                </Box>
                <MoviesPagination/>
            </Box>
        </Container>
    )
}

export default FavoriteMovies;
