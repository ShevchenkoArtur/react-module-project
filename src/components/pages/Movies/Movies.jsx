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

const Movies = () => {
    const {pagination} = useSelector(state => state.page)
    const {movies} = useSelector(state => state.movies)
    const dispatch = useDispatch()

    useEffect(() => {
        // if (!movies.length) {
        dispatch(getMoviesAsync(pagination.page))
        // }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container>
            <SimpleSnackbar />
            <Box className={style.contentBox}>
                <Box className={style.accordionBox}>
                    <AccordionBar/>
                </Box>
                <Box className={style.moviesBox}>
                    <MoviesList moviesArr={movies}/>
                </Box>
            </Box>
            <MoviesPagination/>
        </Container>
    )
}

export default Movies;
