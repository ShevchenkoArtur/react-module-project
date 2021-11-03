import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationSize = ({count, page, handleChange}) => {
    return (
        <Stack spacing={2}>
            <Pagination count={count} page={page} onChange={handleChange} size="large" />
        </Stack>
    )
}

export default PaginationSize;