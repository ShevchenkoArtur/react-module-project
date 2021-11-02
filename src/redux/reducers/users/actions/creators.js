import usersActions from "./constants";

export const singup = () => ({type: usersActions.SIGNUP})
export const login = () => ({type: usersActions.LOGIN})
export const updateRegisterUserData = (key, value) => ({type: usersActions.UPDATE_REGISTER_USER_DATA, payload: {key, value}})
