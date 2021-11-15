import React, {useEffect} from 'react';
import Movie from './Movie/Movie';
import {Typography} from '@mui/material';
import {resetMovieAccountStates} from '../../redux/reducers/movies/actions/creators';
import {useDispatch} from 'react-redux';

const MoviesList = ({moviesArr}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            dispatch(resetMovieAccountStates())
        }
    }, [])

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
