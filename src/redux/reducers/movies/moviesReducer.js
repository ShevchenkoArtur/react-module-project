import moviesActions from "./actions/constants";

const initialState = {
    movies: []
}

const moviesReducer = (state=initialState, action) => {
    switch (action.type) {
        case moviesActions.GET_MOVIES:
            return {
                ...state,
                movies: action.payload.data
            }
        default:
            return state
    }
}

export default moviesReducer;