import genresActions from './constants';

export const getGenres = (genres) => ({type: genresActions.GET_GENRES, payload: {genres}})
export const updateGenresId = (genreId, bool) => ({type: genresActions.UPDATE_GENRES_ID, payload: {genreId, bool}})

