import moviesActions from "./constants";

export const getMovies = (movies) => ({type: moviesActions.GET_MOVIES, payload: {movies}})
export const getFavoriteMovies = (movies) => ({type: moviesActions.GET_FAVORITE_MOVIES, payload: {movies}})
export const getMovie = (movie) => ({type: moviesActions.GET_MOVIE, payload: {movie}})
export const getGenres = (genres) => ({type: moviesActions.GET_GENRES, payload: {genres}})
export const getLanguages = (languages) => ({type: moviesActions.GET_LANGUAGES, payload: {languages}})
export const updateSearchLanguage = (newValue) => ({type: moviesActions.UPDATE_SEARCH_LANGUAGE, payload: {newValue}})
export const updateSelectSortValue = (newValue) => ({type: moviesActions.UPDATE_SELECT_SORT_VALUE, payload: {newValue}})
export const searchFilm = (movies) => ({type: moviesActions.SEARCH_FILM, payload: {movies}})
export const toggleLoader = () => ({type: moviesActions.TOGGLE_LOADER})
export const updatePagination = (totalPages, page) => ({
    type: moviesActions.UPDATE_PAGINATION,
    payload: {totalPages, page}
})
export const updateSearchInputValue = (newValue) => ({
    type: moviesActions.UPDATE_SEARCH_INPUT_VALUE,
    payload: {newValue}
})
export const updateMovieAccountStates = (movieState) => ({
    type: moviesActions.UPDATE_MOVIE_ACCOUNT_STATES,
    payload: {movieState}
})
export const updateMovieFavorite = (movieId, bool, movie) => ({
    type: moviesActions.UPDATE_MOVIE_FAVORITE,
    payload: {movieId, bool, movie}
})
export const updateReleaseDate = (inputName, newValue) => ({
    type: moviesActions.UPDATE_RELEASE_DATE,
    payload: {inputName, newValue}
})
