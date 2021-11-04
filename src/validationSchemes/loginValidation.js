import * as yup from 'yup';

const loginValidation = (username, password) => {
    return yup.object().shape({
        username: yup.string().required('Username is required')
            .oneOf([username, null], 'Username is Invalid'),
        password: yup.string().required('Password is required')
            .oneOf([password, null], 'Wrong password'),
    })
}

export default loginValidation;
