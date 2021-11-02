import * as yup from 'yup';

const signupValidation = () => {
    return yup.object().shape({
        password: yup.string().required('Password is required'),
        confirmedPassword: yup.string().required('Password confirmation is required')
            .oneOf([yup.ref('password'), null], 'Password confirmation does not match'),
    })
}

export default signupValidation;