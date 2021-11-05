import {combineReducers} from 'redux';
import usersReducer from './users/usersReducer';
import moviesReducer from "./movies/moviesReducer";
import themeReducer from './theme/themeReducer';

const rootReducer = combineReducers({
    users: usersReducer,
    movies: moviesReducer,
    theme: themeReducer
})

export default rootReducer;