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
import getMovieAccountStateAsync from '../../../redux/reducers/movies/thunks/getMovieAccountStateAsync';
import markAsFavoriteAsync from '../../../redux/reducers/movies/thunks/markAsFavoriteAsync';

const MovieLayout = ({movie}) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const {moviesAccountStates} = useSelector(state => state.movies)
    const {sessionId, userAccount} = useSelector(state => state.users)
    const [imgHover, setImgHover] = useState(false)

    const onFilmClick = () => {
        history.push(`/movie/${movie.id}`)
    }

    // useEffect(() => {
    //     if (!moviesAccountStates.find(el => el.id === movie.id)?.id && sessionId) {
    //         dispatch(getMovieAccountStateAsync(sessionId, movie.id))
    //     }
    // }, [dispatch, moviesAccountStates, movie.id, sessionId])

    const markAsFavorite = () => {
        const data = {
            media_type: 'movie',
            media_id: movie.id,
            favorite: true
        }

        dispatch(markAsFavoriteAsync(data, sessionId, userAccount.id, movie))
    }
    const unmarkAsFavorite = () => {
        const data = {
            media_type: 'movie',
            media_id: movie.id,
            favorite: false
        }

        dispatch(markAsFavoriteAsync(data, sessionId, userAccount.id, movie))
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
        <Box style={{flexBasis: '18%', margin: '16px 8px 0 8px'}}>
            <Card
                style={{display: 'flex', height: '100%'}}
                onMouseEnter={() => setImgHover(true)}
                onMouseLeave={() => setImgHover(false)}
            >
                <CardActionArea style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between',}}>
                    <Box>
                        <CardMedia
                            style={{position: 'relative'}}
                            component="img"
                            image={`${baseImgUrl}${movie?.poster_path}`}
                            alt="poster image"
                            onClick={onFilmClick}
                        />
                        {
                            renderFavoriteIcon()
                        }
                    </Box>
                    <CardContent>
                        <Typography gutterBottom>
                            {movie?.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {movie?.release_date}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    )
}

export default MovieLayout;