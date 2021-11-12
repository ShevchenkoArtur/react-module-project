import * as yup from 'yup';

const secondStepValidation = () => {
    return yup.object().shape({
        email: yup.string().required('Email is required').email('Email is Invalid'),
        birthday: yup.date('Birthday is required'),
        gender: yup.string().required('Gender is required')
    })
}

export default secondStepValidation;