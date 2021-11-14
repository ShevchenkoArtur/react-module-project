import snackbarActions from './constants';

export const setOpener = (bool) => ({type: snackbarActions.SET_OPENER, payload: {bool}})
export const setMessage = (message) => ({type: snackbarActions.SET_MESSAGE, payload: {message}})
