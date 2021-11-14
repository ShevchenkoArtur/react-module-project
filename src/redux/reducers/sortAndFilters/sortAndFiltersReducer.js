import sortAndFiltersActions from './actions/constants';

const initialState = {
    searchInputValue: '',
    searchLanguage: '',
    searchReleaseDates: {
        startDate: null,
        endDate: null
    },
    selectSortValue: '',
}

const sortAndFilters = (state=initialState, action) => {
    switch (action.type) {
        case sortAndFiltersActions.UPDATE_SEARCH_LANGUAGE:
            return {
                ...state,
                searchLanguage: action.payload.newValue
            }
        case sortAndFiltersActions.UPDATE_RELEASE_DATE:
            return {
                ...state,
                searchReleaseDates: {
                    ...state.searchReleaseDates,
                    [action.payload.inputName]: action.payload.newValue
                }
            }
        case sortAndFiltersActions.UPDATE_SELECT_SORT_VALUE:
            return {
                ...state,
                selectSortValue: action.payload.newValue
            }
        case sortAndFiltersActions.UPDATE_SEARCH_INPUT_VALUE:
            return {
                ...state,
                searchInputValue: action.payload.newValue
            }
        case sortAndFiltersActions.RESET_ALL:
            return {
                ...state,
                searchInputValue: '',
                searchLanguage: '',
                searchReleaseDates: {
                    ...state.searchReleaseDates,
                    startDate: null,
                    endDate: null
                },
                selectSortValue: '',
            }
        default:
            return state
    }
}

export default sortAndFilters;
