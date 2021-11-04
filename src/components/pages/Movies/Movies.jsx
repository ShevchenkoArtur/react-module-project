import React, {useEffect, useState} from 'react';
import PaginationSize from "../../UI/PaginationSize/PaginationSize";
import {useDispatch, useSelector} from "react-redux";
import getMoviesAsync from "../../../redux/reducers/movies/thunks/getMoviesAsync";
import Movie from "./Movie/Movie";
import Loader from '../../UI/Loader/Loader';
import Box from '@mui/material/Box';
import {Button, Container, TextField, Typography} from '@mui/material';
import SimpleAccordion from '../../UI/SimpleAccordion/SimpleAccordion';
import {updateSearchInputValue} from '../../../redux/reducers/movies/actions/creators';
import searchMovieAsync from '../../../redux/reducers/movies/thunks/searchMovieAsync';

const Movies = () => {
    const [findDisabled, setFindDisabled] = useState(true)
    const {movies, isLoading, pagination, searchInputValue} = useSelector(state => state.movies)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMoviesAsync(pagination.page))
    }, [dispatch, pagination.page])

    useEffect(() => {
        searchInputValue ? setFindDisabled(false) : setFindDisabled(true)
    }, [searchInputValue])

    const renderMovies = () => {
        return movies.length
            ?
            movies.map(el => <Movie key={el.id} movie={el}/>)
            :
            <Typography ml={3} mt={3} variant='h6' fontWeight='bold'>There are no movies that matched your
                query.</Typography>
    }

    const onChangePage = (event, value) => {
        dispatch(getMoviesAsync(value))
    }

    const updateSearchValue = (e) => {
        dispatch(updateSearchInputValue(e.target.value))
        if (!e.target.value) {
            dispatch(getMoviesAsync(pagination.page))
        }
    }

    const onSearchMovie = () => {
        dispatch(searchMovieAsync(searchInputValue))
    }

    return (
        <>
            <Container style={{display: 'flex', marginTop: '30px'}}>
                <Box mr={3}>
                    <SimpleAccordion>
                        <TextField
                            placeholder='Enter a movie name...'
                            fullWidth
                            value={searchInputValue}
                            onChange={updateSearchValue}
                        />
                        <Box mt={2}>
                            <Button
                                onClick={onSearchMovie}
                                variant='outlined'
                                fullWidth
                                style={{marginTop: '8px'}}
                                disabled={findDisabled}
                            >
                                Find
                            </Button>
                        </Box>
                    </SimpleAccordion>
                </Box>
                <Box style={{display: 'flex', flexWrap: 'wrap', margin: '-16px -8px 0 -8px'}}>
                    {
                        !isLoading && renderMovies()
                    }
                    {
                        isLoading && <Loader/>
                    }
                </Box>
            </Container>
            {
                isLoading || !movies.length
                    ?
                    ''
                    :
                    <Box style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} mt={5}>
                        <PaginationSize count={pagination.totalPages} page={pagination.page}
                                        handleChange={onChangePage}/>
                    </Box>
            }

        </>
    )
}

export default Movies;