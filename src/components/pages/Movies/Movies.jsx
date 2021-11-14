import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import getMoviesAsync from "../../../redux/reducers/movies/thunks/getMoviesAsync";
import MoviesLayout from '../../MoviesLayout/MoviesLayout';
import Loader from '../../UI/Loader/Loader';

const Movies = () => {
    const {pagination, isLoading} = useSelector(state => state.page)
    const {movies} = useSelector(state => state.movies)
    const dispatch = useDispatch()

    useEffect(() => {
        // if (!movies.length) {
        dispatch(getMoviesAsync(pagination.page))
        // }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        isLoading
            ?
            <Loader/>
            :
            <MoviesLayout moviesArr={movies}/>
    )
}

export default Movies;
