import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import {baseImgUrl} from '../../../../api/api';

const Movie = ({movie}) => {

    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={`${baseImgUrl}${movie.poster_path}`}
                    alt="poster image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {movie.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {movie.release_date}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Movie;