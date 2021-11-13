import {combineReducers} from 'redux';
import usersReducer from './users/usersReducer';
import moviesReducer from "./movies/moviesReducer";
import themeReducer from './theme/themeReducer';
import genresReducer from './genres/genresReducer';
import languagesReducer from './languages/languagesReducer';
import pageReducer from './page/pageReducer';

const rootReducer = combineReducers({
    page: pageReducer,
    users: usersReducer,
    movies: moviesReducer,
    genres: genresReducer,
    languages: languagesReducer,
    theme: themeReducer
})

export default rootReducer;
