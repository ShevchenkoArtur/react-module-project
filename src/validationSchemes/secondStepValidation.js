import * as yup from 'yup';

const secondStepValidation = () => {
    return yup.object().shape({
        email: yup.string().required('Email is required').email('Email is Invalid'),
        gender: yup.string().required('Gender is required'),
        birthday: yup.string().nullable().required('Birthday is required')
    })
}

export default secondStepValidation;
