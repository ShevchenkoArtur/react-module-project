import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import {baseImgUrl} from '../../../../api/api';
import {useHistory} from 'react-router-dom';
import Box from '@mui/material/Box';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import getMovieAccountStateAsync from '../../../../redux/reducers/movies/thunks/getMovieAccountStateAsync';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {pink} from '@mui/material/colors';
import markAsFavoriteAsync from '../../../../redux/reducers/movies/thunks/markAsFavoriteAsync';

const Movie = ({movie}) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const {moviesAccountStates} = useSelector(state => state.movies)
    const {sessionId, userAccount} = useSelector(state => state.users)

    const onFilmClick = () => {
        history.push(`/movie/${movie.id}`)
    }

    useEffect(() => {
        if (!moviesAccountStates.find(el => el.id === movie.id).id) {
            dispatch(getMovieAccountStateAsync(sessionId, movie.id))
        }
    }, [])

    const markAsFavorite = () => {
        const data = {
            media_type: 'movie',
            media_id: movie.id,
            favorite: true
        }

        dispatch(markAsFavoriteAsync(data, sessionId, userAccount.id))
    }
    const unmarkAsFavorite = () => {
        const data = {
            media_type: 'movie',
            media_id: movie.id,
            favorite: false
        }

        dispatch(markAsFavoriteAsync(data, sessionId, userAccount.id))
    }

    const renderFavoriteIcon = () => {
        const obj = moviesAccountStates.find(el => el.id === movie.id)
        if (obj) {
            return obj.favorite ? <FavoriteIcon sx={{color: pink[500]}} onClick={unmarkAsFavorite}/> :
                <FavoriteBorderIcon sx={{color: pink[500]}} onClick={markAsFavorite}/>
        }
    }

    return (
        <Box style={{flexBasis: '18%', margin: '16px 8px 0 8px'}}>
            <Card style={{display: 'flex', height: '100%'}}>
                <CardActionArea style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between',}}>
                    <Box style={{position: 'relative'}}>
                        <CardMedia
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

export default Movie;