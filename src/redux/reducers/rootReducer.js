import {combineReducers} from 'redux';
import usersReducer from './users/usersReducer';
import moviesReducer from "./movies/moviesReducer";
import themeReducer from './theme/themeReducer';
import genresReducer from './genres/genresReducer';

const rootReducer = combineReducers({
    users: usersReducer,
    movies: moviesReducer,
    genres: genresReducer,
    theme: themeReducer
})

export default rootReducer;