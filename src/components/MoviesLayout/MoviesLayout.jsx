import React, {useState} from 'react';
import {Container, Typography} from '@mui/material';
import Loader from '../UI/Loader/Loader';
import Box from '@mui/material/Box';
import AccordionBar from '../AccordionBar/AccordionBar';
import {useSelector} from 'react-redux';
import MovieLayout from './MovieLayout/MovieLayout';
import style from './MoviesLayout.module.css'
import SimpleSnackbar from '../UI/SimpleSnackbar/SimpleSnackbar';
import MoviesPagination from './MoviesPagination/MoviesPagination';

const MoviesLayout = ({moviesArr}) => {
    const {isLoading} = useSelector(state => state.page)
    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState('')

    const renderMovies = (moviesArr) => {
        return (
            moviesArr.length
                ?
                moviesArr.map(el => <MovieLayout key={el.id} movie={el} setMessage={setMessage} setOpen={setOpen}/>)
                :
                <Typography ml={3} mt={3} variant='h6' fontWeight='bold'>
                    There are no movies that matched your query.
                </Typography>
        )
    }

    return (
        <>
            {
                isLoading
                    ?
                    <Loader/>
                    :
                    <Container>
                        <SimpleSnackbar open={open} setOpen={setOpen} message={message}/>
                        <Box className={style.contentBox}>
                            <Box className={style.accordionBox}>
                                <AccordionBar/>
                            </Box>
                            <Box className={style.moviesBox}>
                                {
                                    renderMovies(moviesArr)
                                }
                            </Box>
                        </Box>
                        <MoviesPagination/>
                    </Container>
            }
        </>
    )
}

export default MoviesLayout;
