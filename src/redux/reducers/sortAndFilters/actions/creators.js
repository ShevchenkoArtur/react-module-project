import sortAndFiltersActions from './constants';

export const resetAll = () => ({type: sortAndFiltersActions.RESET_ALL})
export const updateSearchLanguage = (newValue) => ({
    type: sortAndFiltersActions.UPDATE_SEARCH_LANGUAGE,
    payload: {newValue}
})
export const updateSelectSortValue = (newValue) => ({
    type: sortAndFiltersActions.UPDATE_SELECT_SORT_VALUE,
    payload: {newValue}
})
export const updateSearchInputValue = (newValue) => ({
    type: sortAndFiltersActions.UPDATE_SEARCH_INPUT_VALUE,
    payload: {newValue}
})
export const updateReleaseDate = (inputName, newValue) => ({
    type: sortAndFiltersActions.UPDATE_RELEASE_DATE,
    payload: {inputName, newValue}
})
