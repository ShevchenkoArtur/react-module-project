import React from 'react';
import {Container, Typography} from '@mui/material';
import Loader from '../UI/Loader/Loader';
import Box from '@mui/material/Box';
import AccordionBar from '../AccordionBar/AccordionBar';
import PaginationSize from '../UI/PaginationSize/PaginationSize';
import {useDispatch, useSelector} from 'react-redux';
import getMoviesAsync from '../../redux/reducers/movies/thunks/getMoviesAsync';
import MovieLayout from './MovieLayout/MovieLayout';
import discoverMovieAsync from '../../redux/reducers/movies/thunks/discoverMovieAsync';

const MoviesLayout = ({moviesArr}) => {
    const {pagination, isLoading, selectSortValue} = useSelector(state => state.movies)
    const dispatch = useDispatch()

    const renderMovies = (moviesArr) => {
        return (
            moviesArr.length
                ?
                moviesArr.map(el => <MovieLayout key={el.id} movie={el}/>)
                :
                <Typography ml={3} mt={3} variant='h6' fontWeight='bold'>There are no movies that matched your
                    query.</Typography>
        )
    }

    const onChangePage = (event, page) => {
        // dispatch(getMoviesAsync(value))
        dispatch(discoverMovieAsync(selectSortValue, page))
    }

    return (
        <>
            {
                isLoading
                    ?
                    <Loader/>
                    :
                    <>
                        <Container style={{display: 'flex', marginTop: '30px'}}>
                            <Box mr={3}>
                                <AccordionBar/>
                            </Box>
                            <Box style={{display: 'flex', flexWrap: 'wrap', margin: '-16px -8px 0 -8px'}}>
                                {
                                    renderMovies(moviesArr)
                                }
                            </Box>
                        </Container>
                        <Box style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} mt={5}>
                            <PaginationSize count={pagination.totalPages} page={pagination.page}
                                            handleChange={onChangePage}/>
                        </Box>
                    </>
            }
        </>
    )
}

export default MoviesLayout;