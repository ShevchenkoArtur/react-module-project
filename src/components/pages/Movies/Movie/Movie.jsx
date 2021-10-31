import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions} from '@mui/material';

const Movie = ({movie}) => {

    // const cardStyles = {
    //     marginRight: '8px',
    //     marginLeft: '8px',
    //     marginTop: '16px',
    //     flexBasis: '33.3%'
    // }

    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={`${process.env.REACT_APP_BASE_IMAGE_URL}${movie.poster_path}`}
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
            <CardActions>
                {/*<Button size="small" color="primary">*/}
                {/*    Share*/}
                {/*</Button>*/}
            </CardActions>
        </Card>
    )
}

export default Movie;