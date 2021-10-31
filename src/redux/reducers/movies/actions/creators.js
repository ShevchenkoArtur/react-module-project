import moviesActions from "./constants";

export const getMovies = (data) => ({type: moviesActions.GET_MOVIES, payload: {data}})