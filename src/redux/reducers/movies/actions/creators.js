import moviesActions from "./constants";

export const getMovies = (movies) => ({type: moviesActions.GET_MOVIES, payload: {movies}})
export const getFavoriteMovies = (movies) => ({type: moviesActions.GET_FAVORITE_MOVIES, payload: {movies}})
export const getMovie = (movie) => ({type: moviesActions.GET_MOVIE, payload: {movie}})
export const searchFilm = (movies) => ({type: moviesActions.SEARCH_FILM, payload: {movies}})
export const updateMovieAccountStates = (movieState) => ({
    type: moviesActions.UPDATE_MOVIE_ACCOUNT_STATES,
    payload: {movieState}
})
export const updateMovieFavorite = (movieId, bool, movie) => ({
    type: moviesActions.UPDATE_MOVIE_FAVORITE,
    payload: {movieId, bool, movie}
})
