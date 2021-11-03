import moviesActions from "./actions/constants";

const initialState = {
    movies: [],
    selectedMovie: {},
    isLoading: false,
    pagination: {
        page: 1,
        totalPages: 0
    }
}

const moviesReducer = (state=initialState, action) => {
    switch (action.type) {
        case moviesActions.GET_MOVIES:
            return {
                ...state,
                movies: action.payload.movies
            }
        case moviesActions.GET_MOVIE:
            return {
                ...state,
                selectedMovie: action.payload.movie
            }
        case moviesActions.TOGGLE_LOADER:
            return {
                ...state,
                isLoading: !state.isLoading
            }
        case moviesActions.UPDATE_PAGINATION:
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    page: action.payload.page,
                    totalPages: action.payload.totalPages
                }
            }
        default:
            return state
    }
}

export default moviesReducer;