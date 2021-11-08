import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import getMoviesAsync from "../../../redux/reducers/movies/thunks/getMoviesAsync";
import MoviesLayout from '../../MoviesLayout/MoviesLayout';
import {useHistory} from 'react-router-dom';
import {getSessionId} from '../../../redux/reducers/users/actions/creators';

const Movies = () => {
    const history = useHistory()
    const {movies, pagination} = useSelector(state => state.movies)
    const {sessionId} = useSelector(state => state.users)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     history.push('/movies')
    // }, [])

    // useEffect(() => {
    //     if (localStorage.getItem('session_id') && !sessionId) {
    //         dispatch(getSessionId(localStorage.getItem('session_id')))
    //     }
    // }, [])


    useEffect(() => {
        if (!movies.length) {
            dispatch(getMoviesAsync(pagination.page))
        }
    }, [dispatch, pagination.page, movies.length])

    return <MoviesLayout moviesArr={movies}/>
}

export default Movies;