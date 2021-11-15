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
import formatDate from '../../../utils/formatDate';
import discoverMovieAsync from '../../../redux/reducers/movies/thunks/discoverMovieAsync';
import searchMovieAsync from '../../../redux/reducers/movies/thunks/searchMovieAsync';

const Movies = () => {
    const {sessionId, userAccount} = useSelector(state => state.users)
    const {pagination, isLoading} = useSelector(state => state.page)
    const {genresId} = useSelector(state => state.genres)
    const {movies} = useSelector(state => state.movies)
    const dispatch = useDispatch()
    const history = useHistory()
    const {
        searchReleaseDates,
        searchLanguage,
        selectSortValue,
        searchInputValue
    } = useSelector(state => state.sortAndFilters)

    const findWithFilters = (page) => {
        const startDate = formatDate(searchReleaseDates.startDate)
        const endDate = formatDate(searchReleaseDates.endDate)
        const releaseDatesQuery = `primary_release_date.gte=${startDate}&primary_release_date.lte=${endDate}`
        const genresQuery = `with_genres=${genresId.join()}`
        const languageQuery = `with_original_language=${searchLanguage}`

        dispatch(
            discoverMovieAsync(`${genresQuery}&${languageQuery}&${releaseDatesQuery}&${selectSortValue}`, page)
        )
    }


    useEffect(() => {
        if (searchInputValue) {
            console.log('Если поиск есть')
            dispatch(searchMovieAsync(searchInputValue, pagination.page))
        } else if (searchReleaseDates.startDate || searchReleaseDates.endDate || selectSortValue || searchLanguage || genresId.length) {
            console.log('Если фильтры есть')
            findWithFilters(pagination.page)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (sessionId || localStorage.getItem('session_id')) {
            history.push('/movies')
            if (!searchInputValue && !searchReleaseDates.startDate && !searchReleaseDates.endDate && !selectSortValue && !searchLanguage && !genresId.length) {
                console.log('Кэжуал загрузка')
                dispatch(getMoviesAsync(pagination.page))
            }
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
