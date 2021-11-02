import * as yup from 'yup';

const secondStepValidation = () => {
    return yup.object().shape({
        email: yup.string().required('Email is required').email('Email is Invalid')
    })
}

export default secondStepValidation;