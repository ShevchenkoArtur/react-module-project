import React from 'react';
import Box from '@mui/material/Box';
import PaginationSize from '../UI/PaginationSize/PaginationSize';
import {useDispatch, useSelector} from 'react-redux';
import formatDate from '../../utils/formatDate';
import discoverMovieAsync from '../../redux/reducers/movies/thunks/discoverMovieAsync';
import searchMovieAsync from '../../redux/reducers/movies/thunks/searchMovieAsync';
import {useHistory} from 'react-router-dom';

const MoviesPagination = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const paginationStyles = {
        position: 'absolute',
        bottom: '80px',
        left: '50%',
        transform: 'translateX(-50%)'
    }

    const {
        searchInputValue,
        searchReleaseDates,
        searchLanguage,
        selectSortValue
    } = useSelector(state => state.sortAndFilters)

    const {pagination} = useSelector(state => state.page)
    const {genresId} = useSelector(state => state.genres)

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

    const onChangePage = (event, page) => {
        if (searchInputValue) {
            dispatch(searchMovieAsync(searchInputValue, page, history))
        } else {
            findWithFilters(page)
        }
    }

    return (
        <Box style={paginationStyles}>
            <PaginationSize count={pagination.totalPages} page={pagination.page}
                            handleChange={onChangePage}/>
        </Box>
    )
}

export default MoviesPagination;
