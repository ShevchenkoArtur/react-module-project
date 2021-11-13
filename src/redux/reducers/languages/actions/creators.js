import languagesActions from './constants';

export const getLanguages = (languages) => ({type: languagesActions.GET_LANGUAGES, payload: {languages}})
