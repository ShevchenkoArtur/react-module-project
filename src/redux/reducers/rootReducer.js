import {combineReducers} from 'redux';
import usersReducer from './users/usersReducer';
import moviesReducer from "./movies/moviesReducer";
import themeReducer from './theme/themeReducer';
import genresReducer from './genres/genresReducer';
import languagesReducer from './languages/languagesReducer';

const rootReducer = combineReducers({
    users: usersReducer,
    movies: moviesReducer,
    genres: genresReducer,
    languages: languagesReducer,
    theme: themeReducer
})

export default rootReducer;