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
        default:
            return state
    }
}

export default usersReducer;