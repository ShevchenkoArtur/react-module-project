import * as yup from 'yup';

const signupValidation = () => {
    return yup.object().shape({
        firstName: yup.string().required('First Name is required'),
        lastName: yup.string().required('Last Name is required'),
        username: yup.string().required('Username is required'),
    })
}

export default signupValidation;