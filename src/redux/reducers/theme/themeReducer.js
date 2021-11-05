import themeActions from './actions/constants';

const initialState = {
    isLightMode: true,
}

const themeReducer = (state=initialState, action) => {
    switch (action.type) {
        case themeActions.TOGGLE_THEME:
            return {
                ...state,
                isLightMode: !state.isLightMode
            }
        default:
            return state
    }
}

export default themeReducer;