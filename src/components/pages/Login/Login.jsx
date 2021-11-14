import React from 'react';
import {Box, Paper, TextField, Typography} from '@mui/material';
import Button from '@mui/material/Button';
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../../redux/reducers/users/actions/creators";
import loginValidation from "../../../validationSchemes/loginValidation";
import {generateToken} from '../../../api/routes/auth';
import './form.css'

const Login = () => {
    const {registeredUserData} = useSelector(state => state.users)
    const dispatch = useDispatch()
    const history = useHistory()

    const {handleSubmit, register, formState: {errors}} = useForm({
        resolver: yupResolver(loginValidation(registeredUserData?.username, registeredUserData?.password)),
        mode: 'onSubmit'
    })

    const onSubmit = (data) => {
        dispatch(login())

        generateToken()
            .then(res => {
                const redirect = `https://www.themoviedb.org/authenticate/${res.data.request_token}?redirect_to=${process.env.REACT_APP_REDIRECT_URL}`
                window.location.replace(redirect)
            })
    }

    return (
        <Box className='formContainer'>
            <Paper elevation={3}>
                <form noValidate className='formStyles' onSubmit={handleSubmit(onSubmit)}>
                    <Typography align='center' fontWeight='bold'>Login</Typography>
                    <Box>
                        <TextField
                            {...register('username')}
                            error={!!errors.username}
                            helperText={errors?.username?.message}
                            type='text'
                            label='Username'
                            margin='normal'
                            fullWidth
                        />
                    </Box>
                    <Box>
                        <TextField
                            {...register('password')}
                            error={!!errors.password}
                            helperText={errors?.password?.message}
                            type='password'
                            label='Password'
                            margin='normal'
                            fullWidth
                        />
                    </Box>
                    <Box mt={2}>
                        <Button fullWidth variant='contained' type='submit'>Submit</Button>
                    </Box>
                    <Box mt={2}>
                        <Button onClick={() => history.push('/signup')} fullWidth>Signup</Button>
                    </Box>
                </form>
            </Paper>
        </Box>
    )
}

export default Login;
