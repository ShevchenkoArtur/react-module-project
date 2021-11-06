import moviesActions from "./actions/constants";

const initialState = {
    movies: [],
    moviesAccountStates: [],
    selectedMovie: {},
    isLoading: false,
    pagination: {
        page: 1,
        totalPages: 0
    },
    searchInputValue: '',
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
        case moviesActions.UPDATE_SEARCH_INPUT_VALUE:
            return {
                ...state,
                searchInputValue: action.payload.newValue
            }
        case moviesActions.SEARCH_FILM:
            return {
                ...state,
                movies: action.payload.movies
            }
        case moviesActions.UPDATE_MOVIE_ACCOUNT_STATES:
            return {
                ...state,
                moviesAccountStates: [...state.moviesAccountStates, action.payload.movieState]
            }
        case moviesActions.UPDATE_MOVIE_FAVORITE:
            return {
                ...state,
                moviesAccountStates: state.moviesAccountStates.map(el => {
                    if(el.id === action.payload.movieId) {
                        return {
                            ...el,
                            favorite: action.payload.bool
                        }
                    }
                    return el
                })
            }
        default:
            return state
    }
}

export default moviesReducer;