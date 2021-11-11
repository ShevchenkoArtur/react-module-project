import moviesActions from "./actions/constants";

const initialState = {
    movies: [],
    favoriteMovies: [],
    genres: [],
    languages: [],
    moviesAccountStates: [],
    selectedMovie: {},
    isLoading: false,
    pagination: {
        page: 1,
        totalPages: 0
    },
    searchInputValue: '',
    searchLanguage: '',
    searchReleaseDates: {
        startDate: null,
        endDate: null
    },
    selectSortValue: '',
    genresId: [],
}

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case moviesActions.GET_MOVIES:
            return {
                ...state,
                movies: action.payload.movies
            }
        case moviesActions.GET_FAVORITE_MOVIES:
            return {
                ...state,
                favoriteMovies: action.payload.movies
            }
        case moviesActions.GET_MOVIE:
            return {
                ...state,
                selectedMovie: action.payload.movie
            }
        case moviesActions.GET_GENRES:
            return {
                ...state,
                genres: action.payload.genres.map(el => {
                    return {
                        ...el,
                        isClicked: false
                    }
                })
            }
        case moviesActions.GET_LANGUAGES:
            return {
                ...state,
                languages: action.payload.languages
            }
        case moviesActions.UPDATE_SEARCH_LANGUAGE:
            return {
                ...state,
                searchLanguage: action.payload.newValue
            }
        case moviesActions.UPDATE_RELEASE_DATE:
            return {
                ...state,
                searchReleaseDates: {
                    ...state.searchReleaseDates,
                    [action.payload.inputName]: action.payload.newValue
                }
            }
        case moviesActions.UPDATE_SELECT_SORT_VALUE:
            return {
                ...state,
                selectSortValue: action.payload.newValue
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
            let favoriteMoviesArr = []
            if (action.payload.bool) {
                favoriteMoviesArr = [...state.favoriteMovies, action.payload.movie]
            } else {
                favoriteMoviesArr = state.favoriteMovies.filter(el => el.id !== action.payload.movie.id)
            }

            return {
                ...state,
                favoriteMovies: favoriteMoviesArr,
                moviesAccountStates: state.moviesAccountStates.map(el => {
                    if (el.id === action.payload.movieId) {
                        return {
                            ...el,
                            favorite: action.payload.bool
                        }
                    }
                    return el
                })
            }
        case moviesActions.SORT_MOVIE_BY:
            return {
                ...state,
                movies: action.payload.movies
            }
        case moviesActions.UPDATE_GENRES_ID:
            if (action.payload.bool) {
                return {
                    ...state,
                    genres: state.genres.map(el => {
                        if(el.id === action.payload.genreId) {
                            return {
                                ...el,
                                isClicked: false
                            }
                        }
                        return el
                    }),
                    genresId: state.genresId.filter(el => el !== action.payload.genreId)
                }
            } else {
                return {
                    ...state,
                    genres: state.genres.map(el => {
                        if(el.id === action.payload.genreId) {
                            return {
                                ...el,
                                isClicked: true
                            }
                        }
                        return el
                    }),
                    genresId: [...state.genresId, action.payload.genreId]
                }
            }
        default:
            return state
    }
}

export default moviesReducer;