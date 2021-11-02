import React, {useEffect} from 'react';
import PaginationSize from "../../PaginationSize/PaginationSize";
import {useDispatch, useSelector} from "react-redux";
import getMoviesAsync from "../../../redux/reducers/movies/thunks/getMoviesAsync";
import Movie from "./Movie/Movie";

const Movies = () => {
    const {movies} = useSelector(state => state.movies)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMoviesAsync())
    }, [dispatch])

    const renderMovies = () => {
        return (
            movies.map(el => <Movie key={el.id} movie={el}/>)
        )
    }

    return (
        <>
            Movies
            <div>
                {renderMovies()}
            </div>
            <PaginationSize/>
        </>
    )
}

export default Movies;