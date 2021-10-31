import * as yup from 'yup';

const SignupValidation = () => {
    return yup.object().shape({
        username: yup.string().required('Username is required'),
        password: yup.string().required('Password is required'),
        confirmedPassword: yup.string().required('Password confirmation is required')
            .oneOf([yup.ref('password'), null], 'Password confirmation does not match'),
    })
}

export default SignupValidation;