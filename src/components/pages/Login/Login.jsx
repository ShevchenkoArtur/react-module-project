import React from 'react';
import {Box, Container, TextField, Typography} from '@mui/material';
import Button from '@mui/material/Button';
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useDispatch} from "react-redux";
import {login} from "../../../redux/reducers/users/actions/creators";
import LoginValidation from "../../../validationSchemes/LoginValidation";

const Login = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const {handleSubmit, register, formState: {errors}} = useForm({
        resolver: yupResolver(LoginValidation())
    })

    const formStyles = {
        border: '1px solid grey',
        borderRadius: '5px',
        padding: '30px'
    }

    const onSubmit = (data) => {
        dispatch(login())
        history.push('/movies')
    }

    return (
        <Container style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80vh'}}>
            <form noValidate style={formStyles} onSubmit={handleSubmit(onSubmit)}>
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
        </Container>
    )
}

export default Login;