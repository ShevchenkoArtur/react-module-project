import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import getMovieAsync from '../../../redux/reducers/movies/thunks/getMovieAsync';
import {baseImgUrl} from '../../../api/api';
import Box from '@mui/material/Box';
import {Container, Typography} from '@mui/material';
import style from './SelectedMovie.module.css'
import {resetSelectedMovie} from '../../../redux/reducers/movies/actions/creators';
import Loader from '../../UI/Loader/Loader';

const SelectedMovie = () => {
    const {isLoading} = useSelector(state => state.page)
    const {selectedMovie} = useSelector(state => state.movies)
    const dispatch = useDispatch()
    const {id} = useParams()
    const noPhotoUrl = 'https://bytes.ua/wp-content/uploads/2017/08/no-image.png'

    const bgPhoto = {
        background: `no-repeat center/cover grey url(${baseImgUrl}${selectedMovie?.backdrop_path})`
    }
    const bgNoPhoto = {
        background: `no-repeat center/cover grey url(${noPhotoUrl})`
    }

    const renderGenres = () => {
        if (selectedMovie.genres) {
            return (
                selectedMovie.genres.map(el => <Typography
                    variant='h6'
                    component='span'
                    key={el.id}
                    ml={3}>{el.name}
                </Typography>)
            )
        }
    }

    useEffect(() => {
        dispatch(getMovieAsync(id))

        return () => {
            dispatch(resetSelectedMovie())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {
                isLoading
                    ?
                    <Loader/>
                    :
                    <Box className={style.selectedMovie} style={selectedMovie.backdrop_path ? bgPhoto : bgNoPhoto}>
                        <Box style={{zIndex: '1', display: 'flex', height: '100%'}}>
                            <Container style={{display: 'flex', marginTop: '40px'}}>
                                <img style={{maxWidth: '100%', borderRadius: '10px', marginRight: '16px'}}
                                     width='300'
                                     src={selectedMovie.poster_path ? `${baseImgUrl}/${selectedMovie.poster_path}` : noPhotoUrl}
                                     alt='Poster'
                                />
                                <Box style={{color: '#fff'}}>
                                    <Typography variant='h4' mb={3}>{selectedMovie.original_title}</Typography>
                                    <Typography variant='h6' mb={3}>Release
                                        Date: {selectedMovie.release_date}</Typography>
                                    <Typography variant='h6' fontWeight='bold'>Overview</Typography>
                                    <Typography variant='h6' mb={3}>{selectedMovie.overview}</Typography>
                                    <Box><Typography variant='h6' component='span'>GENRES:</Typography>{renderGenres()}
                                    </Box>
                                    <Typography variant='h6'
                                                mt={3}>LANGUAGE: {selectedMovie.original_language}</Typography>
                                </Box>
                            </Container>
                        </Box>
                    </Box>
            }
        </>
    )
}

export default SelectedMovie;
