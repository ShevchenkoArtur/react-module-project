import React from 'react';
import Box from '@mui/material/Box';
import {Button} from '@mui/material';
import discoverMovieAsync from '../../../../redux/reducers/movies/thunks/discoverMovieAsync';
import {useDispatch, useSelector} from 'react-redux';
import formatDate from '../../../../utils/formatDate';


const FindButton = () => {
    const {genresId, pagination, searchLanguage, searchReleaseDates} = useSelector(state => state.movies)
    const dispatch = useDispatch()

    const find = () => {
        const startDate = formatDate(searchReleaseDates.startDate)
        const endDate = formatDate(searchReleaseDates.endDate)
        const releaseDatesQuery = `primary_release_date.lte=${startDate}&primary_release_date.gte=${endDate}`
        const genresQuery = `with_genres=${genresId.join()}`
        const languageQuery = `with_original_language=${searchLanguage}`

        dispatch(
            discoverMovieAsync(`${genresQuery}&${languageQuery}&${releaseDatesQuery}`, pagination.page)
        )
    }

    return (
        <Box mt={2}>
            <Button
                variant='outlined'
                fullWidth
                style={{marginTop: '8px'}}
                onClick={find}
            >
                Find
            </Button>
        </Box>
    )
}

export default FindButton;