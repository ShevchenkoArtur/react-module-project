import React from 'react';
import {Container, Typography} from '@mui/material';

const Error = () => {
    return (
        <Container style={{marginTop: '30px'}}>
           <Typography variant='h2'>404</Typography>
            <Typography variant='h5'>Something was wrong, please try it later</Typography>
        </Container>
    );
};

export default Error;
