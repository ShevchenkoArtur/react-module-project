import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationSize = ({count, page, handleChange}) => {
    const getPaginationSize = () => {
        const pageWidth = document.documentElement.scrollWidth
        return pageWidth >= 480 ? 'large' : 'small'
    }

    return (
        <Stack>
            <Pagination count={count} page={page} onChange={handleChange} size={getPaginationSize()}/>
        </Stack>
    )
}

export default PaginationSize;