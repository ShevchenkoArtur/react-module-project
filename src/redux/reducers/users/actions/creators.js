import usersActions from "./constants";

export const singup = () => ({type: usersActions.SIGNUP})
export const login = () => ({type: usersActions.LOGIN})
export const updateRegisterUserData = (key, value) => ({type: usersActions.UPDATE_REGISTER_USER_DATA, payload: {key, value}})
export const getSessionId = (sessionId) => ({type: usersActions.GET_SESSION_ID, payload: {sessionId}})
export const logout = () => ({type: usersActions.LOGOUT})
export const getUserAccount = (data) => ({type: usersActions.GET_USER_ACCOUNT, payload: {data}})