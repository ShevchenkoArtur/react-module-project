import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

const DatePicker = ({value, onChange}) => {
    return (
        <LocalizationProvider dateAdapter={DateAdapter}>
            <Stack spacing={3}>
                <DesktopDatePicker
                    label="Birthday"
                    value={value}
                    onChange={onChange}
                    renderInput={(params) => <TextField {...params} />}
                />
            </Stack>
        </LocalizationProvider>
    )
}

export default DatePicker;