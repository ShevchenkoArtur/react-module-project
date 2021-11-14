import snackbarActions from './actions/constants';

const initialState = {
    isOpen: false,
    message: ''
}

const snackbarReducer = (state=initialState, action) => {
    switch (action.type) {
        case snackbarActions.SET_OPENER:
            return {
                ...state,
                isOpen: action.payload.bool
            }
        case snackbarActions.SET_MESSAGE:
            return {
                ...state,
                message: action.payload.message
            }
        default:
            return state
    }
}

export default snackbarReducer;
