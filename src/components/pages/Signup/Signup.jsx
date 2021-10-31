import React from 'react';
import {Box, Container, TextField, Typography} from '@mui/material';
import Button from '@mui/material/Button';
import {yupResolver} from '@hookform/resolvers/yup';
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {useDispatch} from "react-redux";
import {singup} from "../../../redux/reducers/users/actions/creators";
import SignupValidation from "../../../validationSchemes/SignupValidation";

const Login = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const {register, formState: {errors}, handleSubmit} = useForm({
        resolver: yupResolver(SignupValidation())
    })

    const formStyles = {
        maxWidth: '600px',
        border: '1px solid grey',
        borderRadius: '5px',
        padding: '30px'
    }

    const onSubmit = (data) => {
        dispatch(singup(data))
        history.push('/')
    }

    return (
        <Container style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80vh'}}>
            <form noValidate style={formStyles} onSubmit={handleSubmit(onSubmit)}>
                <Typography align='center' fontWeight='bold'>Signup</Typography>
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
                <Box>
                    <TextField
                        {...register('confirmedPassword')}
                        error={!!errors.confirmedPassword}
                        helperText={errors?.confirmedPassword?.message}
                        type='password'
                        label='Confirm password'
                        margin='normal'
                        fullWidth
                    />
                </Box>
                <Box mt={2}>
                    <Button fullWidth variant='contained' type='submit'>Submit</Button>
                </Box>
                <Box mt={2}>
                    <Button onClick={() => history.push('/')} fullWidth>Login</Button>
                </Box>
            </form>
        </Container>
    )
}

export default Login;