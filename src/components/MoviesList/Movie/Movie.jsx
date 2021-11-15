import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import {useHistory} from 'react-router-dom';
import Box from '@mui/material/Box';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {pink} from '@mui/material/colors';
import {baseImgUrl} from '../../../api/api';
import markAsFavoriteAsync from '../../../redux/reducers/movies/thunks/markAsFavoriteAsync';
import style from './Movie.module.css'
import getMovieAccountStateAsync from '../../../redux/reducers/movies/thunks/getMovieAccountStateAsync';
import {setMessage, setOpener} from '../../../redux/reducers/snackbar/actions/creators';

const Movie = ({movie}) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const {moviesAccountStates} = useSelector(state => state.movies)
    const {sessionId, userAccount} = useSelector(state => state.users)
    const [imgHover, setImgHover] = useState(false)
    const noPhotoUrl = 'https://bytes.ua/wp-content/uploads/2017/08/no-image.png'

    const onFilmClick = () => {
        history.push(`/movie/${movie.id}`)
    }

    useEffect(() => {
        if(!moviesAccountStates.length) {
            dispatch(getMovieAccountStateAsync(localStorage.getItem('session_id'), movie.id))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const markAsFavorite = () => {
        const data = {
            media_type: 'movie',
            media_id: movie.id,
            favorite: true
        }

        dispatch(markAsFavoriteAsync(data, sessionId, userAccount.id, movie))
        dispatch(setMessage('Added to your favourite list'))
        dispatch(setOpener(true))
    }

    const unmarkAsFavorite = () => {
        const data = {
            media_type: 'movie',
            media_id: movie.id,
            favorite: false
        }

        dispatch(markAsFavoriteAsync(data, sessionId, userAccount.id, movie))
        dispatch(setMessage('Removed from your favourite list'))
        dispatch(setOpener(true))
    }

    const renderFavoriteIcon = () => {
        const iconStyles = {
            opacity: `${imgHover ? 1 : 0}`,
            transition: '200ms',
            position: 'absolute',
            top: '5px',
            right: '5px'
        }

        const obj = moviesAccountStates.find(el => el.id === movie.id)
        if (obj) {
            return (
                obj.favorite
                    ?
                    <FavoriteIcon sx={{color: pink[500]}} style={iconStyles} onClick={unmarkAsFavorite}/>
                    :
                    <FavoriteBorderIcon sx={{color: pink[500]}} style={iconStyles} onClick={markAsFavorite}/>
            )
        }
    }

    return (
        <Box className={style.cardBox}>
            <Card
                className={style.card}
                onMouseEnter={() => setImgHover(true)}
                onMouseLeave={() => setImgHover(false)}
            >
                <CardActionArea style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                    <Box>
                        <CardMedia
                            style={{position: 'relative'}}
                            component="img"
                            image={movie.poster_path ? `${baseImgUrl}/${movie.poster_path}` : noPhotoUrl}
                            alt="poster image"
                            onClick={onFilmClick}
                        />
                        {
                            renderFavoriteIcon()
                        }
                    </Box>
                    <CardContent style={{flexGrow: 1}}>
                        <Typography fontWeight='bold'>
                            {movie?.title}
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {movie?.release_date}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    )
}

export default Movie;
