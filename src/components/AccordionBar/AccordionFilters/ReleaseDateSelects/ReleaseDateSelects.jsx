import React from 'react';
import Box from '@mui/material/Box';
import {Divider, TextField, Typography} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {DesktopDatePicker} from '@mui/lab';
import {updateReleaseDate} from '../../../../redux/reducers/sortAndFilters/actions/creators';

const ReleaseDateSelects = () => {
    const dispatch = useDispatch()
    const {searchReleaseDates} = useSelector(state => state.sortAndFilters)

    return (
        <Box>
            <Divider/>
            <Typography mt={1} mb={2} fontWeight='bold' variant='body2'>Release Dates</Typography>
            <DesktopDatePicker
                label='From'
                onChange={(newValue) => dispatch(updateReleaseDate('startDate', newValue))}
                value={searchReleaseDates.startDate}
                renderInput={(params) => <TextField {...params} fullWidth/>}
            />
            <DesktopDatePicker
                label='To'
                onChange={(newValue) => dispatch(updateReleaseDate('endDate', newValue))}
                value={searchReleaseDates.endDate}
                renderInput={(params) => <TextField {...params} margin='normal' fullWidth/>}
            />
        </Box>
    )
}

export default ReleaseDateSelects;
