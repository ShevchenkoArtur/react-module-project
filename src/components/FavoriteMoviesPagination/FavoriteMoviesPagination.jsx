import React from 'react';
import Box from '@mui/material/Box';
import PaginationSize from '../UI/PaginationSize/PaginationSize';
import {useDispatch, useSelector} from 'react-redux';
import getFavoriteMoviesAsync from '../../redux/reducers/movies/thunks/getFavoriteMoviesAsync';

const FavoriteMoviesPagination = () => {
    const {sessionId, userAccount} = useSelector(state => state.users)
    const {pagination} = useSelector(state => state.page)
    const dispatch = useDispatch()

    const onChangePage = (event, page) => {
        if (sessionId) {
            dispatch(getFavoriteMoviesAsync(userAccount?.id, sessionId, page))
        } else {
            dispatch(getFavoriteMoviesAsync(userAccount?.id, localStorage.getItem('session_id'), page))
        }
    }

    const paginationStyles = {
        position: 'absolute',
        bottom: '80px',
        left: '50%',
        transform: 'translateX(-50%)'
    }

    return (
        <Box style={paginationStyles}>
            <PaginationSize
                count={pagination.totalPages}
                page={pagination.page}
                handleChange={onChangePage}
            />
        </Box>
    );
};

export default FavoriteMoviesPagination;
