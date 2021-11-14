import React from 'react';
import Movie from './Movie/Movie';
import {Typography} from '@mui/material';

const MoviesList = ({moviesArr}) => {
    return (
        moviesArr.length
            ?
            moviesArr.map(el => <Movie key={el.id} movie={el} />)
            :
            <Typography ml={3} mt={3} variant='h6' fontWeight='bold'>
                There are no movies that matched your query.
            </Typography>
    )
}

export default MoviesList;
