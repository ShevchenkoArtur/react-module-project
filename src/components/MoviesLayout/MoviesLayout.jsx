import React from 'react';
import {Container, Typography} from '@mui/material';
import Loader from '../UI/Loader/Loader';
import Box from '@mui/material/Box';
import AccordionBar from '../AccordionBar/AccordionBar';
import PaginationSize from '../UI/PaginationSize/PaginationSize';
import {useDispatch, useSelector} from 'react-redux';
import MovieLayout from './MovieLayout/MovieLayout';
import discoverMovieAsync from '../../redux/reducers/movies/thunks/discoverMovieAsync';
import style from './MoviesLayout.module.css'

const MoviesLayout = ({moviesArr}) => {
    const {pagination, isLoading, selectSortValue, genresId} = useSelector(state => state.movies)
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
        if (selectSortValue && genresId.join()) {
            console.log('1')
            dispatch(discoverMovieAsync(`${selectSortValue}&with_genres=${genresId.join()}`, page))
        } else if (selectSortValue && !genresId.join()) {
            console.log('2')
            dispatch(discoverMovieAsync(selectSortValue, page))
        } else if (!selectSortValue && genresId.join()) {
            console.log('3')
            dispatch(discoverMovieAsync(`with_genres=${genresId.join()}`, page))
        } else if (!selectSortValue && !genresId.join()) {
            console.log('4')
            dispatch(discoverMovieAsync('', page))
        }
    }

    return (
        <>
            {
                isLoading
                    ?
                    <Loader/>
                    :
                    <Container>
                        <Box className={style.contentBox}>
                            <Box className={style.accordionBox}>
                                <AccordionBar/>
                            </Box>
                            <Box  className={style.moviesBox}>
                                {
                                    renderMovies(moviesArr)
                                }
                            </Box>
                        </Box>
                        <Box className={style.paginationBox}>
                            <PaginationSize count={pagination.totalPages} page={pagination.page}
                                            handleChange={onChangePage}/>
                        </Box>
                    </Container>
            }
        </>
    )
}

export default MoviesLayout;