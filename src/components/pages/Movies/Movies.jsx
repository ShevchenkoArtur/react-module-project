import React, {useEffect} from 'react';
import PaginationSize from "../../UI/PaginationSize/PaginationSize";
import {useDispatch, useSelector} from "react-redux";
import getMoviesAsync from "../../../redux/reducers/movies/thunks/getMoviesAsync";
import Movie from "./Movie/Movie";
import Loader from '../../UI/Loader/Loader';

const Movies = () => {
    const {movies, isLoading, pagination} = useSelector(state => state.movies)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMoviesAsync(pagination.page))
    }, [dispatch])

    const renderMovies = () => {
        return (
            movies.map(el => <Movie key={el.id} movie={el}/>)
        )
    }

    const onChangePage = (event, value) => {
        dispatch(getMoviesAsync(value))
    }

    return (
        <>
            Movies
            <div>
                {
                    !isLoading && renderMovies()
                }
                {
                    isLoading && <Loader />
                }
            </div>
            <PaginationSize count={pagination.totalPages} page={pagination.page} handleChange={onChangePage}/>
        </>
    )
}

export default Movies;