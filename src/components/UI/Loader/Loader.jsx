import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader = () => {

    const loaderStyles = {
        position: 'absolute',
        top: '50%',
        left: '50%'
    }

    return (
        <Box sx={loaderStyles}>
            <CircularProgress/>
        </Box>
    );
}

export default Loader;