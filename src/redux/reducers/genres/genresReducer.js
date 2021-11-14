import genresActions from './actions/constants';

const initialState = {
    genres: [],
    genresId: [],
}

const genresReducer = (state=initialState, action) => {
    switch (action.type) {
        case genresActions.GET_GENRES:
            return {
                ...state,
                genres: action.payload.genres.map(el => {
                    return {
                        ...el,
                        isClicked: false
                    }
                })
            }
        case genresActions.UPDATE_GENRES_ID:
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
        case genresActions.RESET_GENRES:
            return {
                ...state,
                genresId: [],
                genres: state.genres.map(el => {
                    return {
                        ...el,
                        isClicked: false
                    }
                })
            }

        default:
            return state
    }
}

export default genresReducer;
