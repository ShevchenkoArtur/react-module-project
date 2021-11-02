import * as yup from 'yup';
import {useSelector} from 'react-redux';

const LoginValidation = () => {
    const {registeredUserData} = useSelector(state => state.users)

    return yup.object().shape({
        username: yup.string().required('Username is required')
            .oneOf([registeredUserData?.username, null], 'Username is Invalid'),
        password: yup.string().required('Password is required')
            .oneOf([registeredUserData?.password, null], 'Wrong password'),
    })
}

export default LoginValidation;
