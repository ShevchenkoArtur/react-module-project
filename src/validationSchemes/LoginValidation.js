import * as yup from 'yup';
import {useSelector} from 'react-redux';

const LoginValidation = () => {
    const {userData} = useSelector(state => state.users)

    return yup.object().shape({
        username: yup.string().required('Username is required')
            .oneOf([userData.username, null], 'Invalid username'),
        password: yup.string().required('Password is required')
            .oneOf([userData.password, null], 'Wrong password'),
    })
}

export default LoginValidation;
