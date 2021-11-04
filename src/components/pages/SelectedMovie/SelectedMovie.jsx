import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import getMovieAsync from '../../../redux/reducers/movies/thunks/getMovieAsync';
import {baseImgUrl} from '../../../api/api';
import Box from '@mui/material/Box';
import {Typography} from '@mui/material';
import style from './SelectedMovie.module.css'

const SelectedMovie = () => {
    const {selectedMovie} = useSelector(state => state.movies)
    const dispatch = useDispatch()
    const {id} = useParams()

    const imgBoxStyles = {
        background: `no-repeat center/cover grey url(${baseImgUrl}${selectedMovie?.backdrop_path})`
    }

    useEffect(() => {
        dispatch(getMovieAsync(id))
    }, [dispatch, id])

    return (
        <Box className={style.imgBox} style={imgBoxStyles}>
            <Box style={{zIndex: '1', display: 'flex'}}>
                <img style={{maxWidth: '100%', borderRadius: '10px'}} width='300'
                     src={`${baseImgUrl}/${selectedMovie?.poster_path}`} alt='Poster'/>
                <Box style={{color: '#fff'}}>
                    <Typography variant='h3'>{selectedMovie?.original_title}</Typography>
                    <Typography fontWeight='bold'>Overview</Typography>
                    <Typography>{selectedMovie?.overview}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default SelectedMovie;