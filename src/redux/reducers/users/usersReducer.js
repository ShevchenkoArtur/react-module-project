import usersActions from "./actions/constants";

const initialState = {
    isLogin: false,
    userData: {
        username: '',
        password: '',
        confirmedPassword: ''
    }
}

const usersReducer = (state=initialState, action) => {
    switch (action.type) {
        case usersActions.SIGNUP:
            return {
                ...state,
                userData: action.payload.userData
            }
        case usersActions.LOGIN:
            return {
                ...state,
                isLogin: true
            }
        default:
            return state
    }
}

export default usersReducer;