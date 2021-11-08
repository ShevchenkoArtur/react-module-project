import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import getFavoriteMoviesAsync from '../../../redux/reducers/movies/thunks/getFavoriteMoviesAsync';
import MoviesLayout from '../../MoviesLayout/MoviesLayout';

const FavoriteMovies = () => {
    const dispatch = useDispatch()
    const {favoriteMovies} = useSelector(state => state.movies)
    const {userAccount, sessionId} = useSelector(state => state.users)

    useEffect(() => {
        if (!favoriteMovies.length) {
            dispatch(getFavoriteMoviesAsync(userAccount.id, sessionId))
        }
    }, [dispatch, favoriteMovies.length, sessionId, userAccount.id])

    return (
        <MoviesLayout moviesArr={favoriteMovies}/>
    )
}

export default FavoriteMovies;