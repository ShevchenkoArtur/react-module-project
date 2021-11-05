import usersActions from "./actions/constants";

const initialState = {
    isLogin: true,
    sessionId: '',

    registerInputValues: {
        firstName: '',
        lastName: '',
        username: '',
        birthday: null,
        gender: '',
        email: '',
        password: '',
        confirmedPassword: ''
    },

    registeredUserData: {
        firstName: '',
        lastName: '',
        username: '1',
        birthday: null,
        gender: '',
        email: '',
        password: '1',
        confirmedPassword: '1'
    }
}

const usersReducer = (state = initialState, action) => {
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
        case usersActions.LOGOUT:
            return {
                ...state,
                sessionId: ''
            }
        case usersActions.UPDATE_REGISTER_USER_DATA:
            return {
                ...state,
                registerInputValues: {
                    ...state.registerInputValues,
                    [action.payload.key]: action.payload.value
                }
            }
        case usersActions.GET_SESSION_ID:
            return {
                ...state,
                sessionId: action.payload.sessionId
            }
        default:
            return state
    }
}

export default usersReducer;