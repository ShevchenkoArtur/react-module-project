import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import getMoviesAsync from "../../../redux/reducers/movies/thunks/getMoviesAsync";
import MoviesLayout from '../../MoviesLayout/MoviesLayout';

const Movies = () => {
    const {movies, pagination} = useSelector(state => state.movies)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!movies.length) {
            dispatch(getMoviesAsync(pagination.page))
        }
    }, [dispatch, pagination.page, movies.length])

    return <MoviesLayout moviesArr={movies}/>
}

export default Movies;