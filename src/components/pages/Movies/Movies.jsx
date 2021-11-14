import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import getMoviesAsync from "../../../redux/reducers/movies/thunks/getMoviesAsync";
import MoviesPagination from '../../MoviesPagination/MoviesPagination';
import {Container} from '@mui/material';
import SimpleSnackbar from '../../UI/SimpleSnackbar/SimpleSnackbar';
import Box from '@mui/material/Box';
import AccordionBar from '../../AccordionBar/AccordionBar';
import MoviesList from '../../MoviesList/MoviesList';
import style from './Movies.module.css'
import Loader from '../../UI/Loader/Loader';
import {useHistory} from 'react-router-dom';
import {getUserAccount} from '../../../redux/reducers/users/actions/creators';

const Movies = () => {
    const {sessionId, userAccount} = useSelector(state => state.users)
    const {pagination, isLoading} = useSelector(state => state.page)
    const {movies} = useSelector(state => state.movies)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        // if (!movies.length) {
        dispatch(getMoviesAsync(pagination.page))
        // }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (sessionId || localStorage.getItem('session_id')) {
            history.push('/movies')
        }

        if (!userAccount && localStorage.getItem('user_account')) {
            dispatch(getUserAccount(JSON.parse(localStorage.getItem('user_account'))))
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sessionId])

    return (
        <Container>
            <SimpleSnackbar/>
            <Box className={style.contentBox}>
                <Box className={style.accordionBox}>
                    <AccordionBar/>
                </Box>
                <Box className={style.moviesBox}>
                    {
                        isLoading
                            ?
                            <Loader/>
                            :
                            <MoviesList moviesArr={movies}/>
                    }

                </Box>
            </Box>
            <MoviesPagination/>
        </Container>
    )
}

export default Movies;
