import React from 'react';
import Box from '@mui/material/Box';
import {Button, Divider} from '@mui/material';
import discoverMovieAsync from '../../../../redux/reducers/movies/thunks/discoverMovieAsync';
import {useDispatch, useSelector} from 'react-redux';
import formatDate from '../../../../utils/formatDate';
import {useHistory} from 'react-router-dom';


const FindButton = () => {
    const {pagination} = useSelector(state => state.page)
    const {searchLanguage, searchReleaseDates} = useSelector(state => state.sortAndFilters)
    const {genresId} = useSelector(state => state.genres)
    const dispatch = useDispatch()
    const history = useHistory()

    const find = () => {
        const startDate = formatDate(searchReleaseDates.startDate)
        const endDate = formatDate(searchReleaseDates.endDate)
        const releaseDatesQuery = `primary_release_date.gte=${startDate}&primary_release_date.lte=${endDate}`
        const genresQuery = `with_genres=${genresId.join()}`
        const languageQuery = `with_original_language=${searchLanguage}`

        dispatch(
            discoverMovieAsync(`${genresQuery}&${languageQuery}&${releaseDatesQuery}`, pagination.page, history)
        )
    }

    return (
        <Box mt={2}>
            <Divider/>
            <Button
                variant='outlined'
                fullWidth
                style={{marginTop: '16px'}}
                onClick={find}
            >
                Find
            </Button>
        </Box>
    )
}

export default FindButton;
