import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const ChipBtn = ({handleClick, label, isClicked}) => {
    return (
        <Stack direction="row" spacing={1}>
            <Chip
                label={label}
                variant={isClicked ? 'filled' : 'outlined'}
                onClick={handleClick}
            />
        </Stack>
    )
}

export default ChipBtn;