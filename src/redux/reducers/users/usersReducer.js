import usersActions from "./actions/constants";

const initialState = {
    isLogin: true,

    registerInputValues: {
        firstName: '',
        lastName: '',
        username: '',
        birthday: new Date(),
        gender: '',
        email: '',
        password: '',
        confirmedPassword: ''
    },

    registeredUserData: {}
}

const usersReducer = (state=initialState, action) => {
    switch (action.type) {
        case usersActions.SIGNUP:
            return {
                ...state,
                registeredUserData: {
                    ...state.registerInputValues,
                }
            }
        case usersActions.LOGIN:
            return {
                ...state,
                isLogin: true
            }
        case usersActions.UPDATE_REGISTER_USER_DATA:
            return {
                ...state,
                registerInputValues: {
                    ...state.registerInputValues,
                    [action.payload.key]: action.payload.value
                }
            }
        default:
            return state
    }
}

export default usersReducer;