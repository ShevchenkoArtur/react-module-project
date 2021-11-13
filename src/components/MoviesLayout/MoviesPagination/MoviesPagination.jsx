import React from 'react';
import Box from '@mui/material/Box';
import style from '../MoviesLayout.module.css';
import PaginationSize from '../../UI/PaginationSize/PaginationSize';
import {useDispatch, useSelector} from 'react-redux';
import formatDate from '../../../utils/formatDate';
import discoverMovieAsync from '../../../redux/reducers/movies/thunks/discoverMovieAsync';
import searchMovieAsync from '../../../redux/reducers/movies/thunks/searchMovieAsync';

const MoviesPagination = () => {
    const dispatch = useDispatch()

    const {
        pagination,
        genresId,
        searchInputValue,
        searchReleaseDates,
        searchLanguage
    } = useSelector(state => state.movies)

    const findWithFilters = (page) => {
        const startDate = formatDate(searchReleaseDates.startDate)
        const endDate = formatDate(searchReleaseDates.endDate)
        const releaseDatesQuery = `primary_release_date.gte=${startDate}&primary_release_date.lte=${endDate}`
        const genresQuery = `with_genres=${genresId.join()}`
        const languageQuery = `with_original_language=${searchLanguage}`

        dispatch(
            discoverMovieAsync(`${genresQuery}&${languageQuery}&${releaseDatesQuery}`, page)
        )
    }

    const onChangePage = (event, page) => {
        if (searchInputValue) {
            dispatch(searchMovieAsync(searchInputValue, page))
        } else {
            findWithFilters(page)
        }
    }

    return (
        <Box className={style.paginationBox}>
            <PaginationSize count={pagination.totalPages} page={pagination.page}
                            handleChange={onChangePage}/>
        </Box>
    )
}

export default MoviesPagination;