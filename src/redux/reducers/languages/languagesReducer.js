import languagesActions from './actions/constants';

const initialState = {
    languages: [],
}

const languagesReducer = (state=initialState, action) => {
    switch (action.type) {
        case languagesActions.GET_LANGUAGES:
            return {
                ...state,
                languages: action.payload.languages
            }
        default:
            return state
    }
}

export default languagesReducer;