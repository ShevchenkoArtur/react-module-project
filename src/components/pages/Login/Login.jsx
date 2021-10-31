import React from 'react';
import {Box, Container, TextField, Typography} from '@mui/material';
import Button from '@mui/material/Button';
import {useHistory} from 'react-router-dom';
import * as yup from 'yup'
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

const Login = () => {
    const history = useHistory()

    const validationScheme = yup.object().shape({
        username: yup.string().required('Username is required'),
        password:yup.string().required('Password is required')
    })

    const {handleSubmit, register, formState: {errors}} = useForm({
        resolver: yupResolver(validationScheme)
    })


    const formStyles = {
        border: '1px solid grey',
        borderRadius: '5px',
        padding: '30px'
    }

    const onSubmit = (data) => {
        console.log(data)
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