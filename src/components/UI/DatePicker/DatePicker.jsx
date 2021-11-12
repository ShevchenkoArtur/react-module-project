import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

const DatePicker = ({value, onChange, label, disabledFuture, errors}) => {
    return (
        <Stack spacing={3}>
            <DesktopDatePicker
                disableFuture={disabledFuture}
                label={label}
                value={value}
                onChange={onChange}
                renderInput={
                    (params) =>
                        <TextField
                            {...params}
                            error={!!errors.birthday}
                            helperText={errors?.birthday?.message && 'Birthday is required'}
                        />
                }
            />
        </Stack>
    )
}

export default DatePicker;