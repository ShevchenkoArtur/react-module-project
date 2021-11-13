import pageActions from './constants';

export const toggleLoader = () => ({type: pageActions.TOGGLE_LOADER})
export const updatePagination = (totalPages, page) => ({
    type: pageActions.UPDATE_PAGINATION,
    payload: {totalPages, page}
})
