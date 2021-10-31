import usersActions from "./constants";

export const singup = (userData) => ({type: usersActions.SIGNUP, payload: {userData}})
export const login = () => ({type: usersActions.LOGIN})