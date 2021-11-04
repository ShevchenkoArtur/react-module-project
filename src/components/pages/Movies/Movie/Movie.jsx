import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import {baseImgUrl} from '../../../../api/api';
import {useHistory} from 'react-router-dom';
import Box from '@mui/material/Box';

const Movie = ({movie}) => {
    const history = useHistory()

    const onFilmClick = () => {
        history.push(`/movie/${movie.id}`)
    }

    return (
        <Box style={{flexBasis: '18%', margin: '16px 8px 0 8px'}}>
            <Card style={{height: '100%'}}>
                <CardActionArea style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between',}}>
                    <CardMedia
                        component="img"
                        image={`${baseImgUrl}${movie?.poster_path}`}
                        alt="poster image"
                        onClick={onFilmClick}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
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