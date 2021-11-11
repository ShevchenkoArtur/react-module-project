import React from 'react';
import Box from '@mui/material/Box';
import {Typography} from '@mui/material';
import DatePicker from '../../../UI/DatePicker/DatePicker';
import {updateReleaseDate} from '../../../../redux/reducers/movies/actions/creators';
import {useDispatch, useSelector} from 'react-redux';

const ReleaseDateSelects = () => {
    const dispatch = useDispatch()
    const {searchReleaseDates} = useSelector(state => state.movies)

    return (
        <Box>
            <Typography>Release Dates</Typography>
            <DatePicker
                label='From'
                value={searchReleaseDates.startDate}
                onChange={(newValue) => dispatch(updateReleaseDate('startDate', newValue))}
            />
            <DatePicker
                value={searchReleaseDates.endDate}
                label='To'
                onChange={(newValue) => dispatch(updateReleaseDate('endDate', newValue))}
            />
        </Box>
    )
}

export default ReleaseDateSelects;