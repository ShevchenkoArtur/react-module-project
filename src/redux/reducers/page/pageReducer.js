import pageActions from './actions/constants';

const initialState = {
    isLoading: false,
    pagination: {
        page: 1,
        totalPages: 0
    },
}

const pageReducer = (state=initialState, action) => {
    switch (action.type) {
        case pageActions.TOGGLE_LOADER:
            return {
                ...state,
                isLoading: !state.isLoading
            }
        case pageActions.UPDATE_PAGINATION:
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

export default pageReducer;
