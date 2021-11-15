import React, {useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import getMovieAsync from '../../../redux/reducers/movies/thunks/getMovieAsync';
import {baseImgUrl} from '../../../api/api';
import Box from '@mui/material/Box';
import {Container, Typography} from '@mui/material';
import style from './SelectedMovie.module.css'
import {resetSelectedMovie} from '../../../redux/reducers/movies/actions/creators';
import Skeleton from '@mui/material/Skeleton';

const SelectedMovie = () => {
    const {isLoading} = useSelector(state => state.page)
    const {selectedMovie} = useSelector(state => state.movies)
    const dispatch = useDispatch()
    const {id} = useParams()
    const history = useHistory()

    const bgPhoto = {
        background: `no-repeat center/cover grey url(${baseImgUrl}${selectedMovie?.backdrop_path})`
    }

    const renderGenres = () => {
        if (selectedMovie.genres) {
            return selectedMovie.genres.map(el => <Typography key={el.id}>{el.name}</Typography>)
        }
    }

    useEffect(() => {
        return () => {
            dispatch(resetSelectedMovie())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        dispatch(getMovieAsync(id, history))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Box className={style.selectedMovie} style={bgPhoto}>
                <Box style={{zIndex: '1', display: 'flex', height: '100%'}}>
                    <Container style={{display: 'flex'}}>
                        {
                            selectedMovie.poster_path
                                ?
                                <img style={{maxWidth: '100%', borderRadius: '10px'}}
                                     width='300'
                                     src={`${baseImgUrl}/${selectedMovie.poster_path}`}
                                     alt='Poster'
                                />
                                :
                                <Skeleton variant="rectangular" width={300} height={500}/>
                        }

                        <Box style={{color: '#fff'}}>
                            <Typography variant='h4'>{isLoading ? <Skeleton/> : selectedMovie.original_title}</Typography>
                            <Typography fontWeight='bold'>{isLoading ? <Skeleton/> : 'Overview'}</Typography>
                            <Typography>{isLoading ? <Skeleton/> : selectedMovie.overview}</Typography>
                            <Box>GENRES:{renderGenres()}</Box>
                            <Typography>LANGUAGE: {selectedMovie.original_language}</Typography>
                        </Box>
                    </Container>
                </Box>
            </Box>

        </>
    )
}

export default SelectedMovie;
