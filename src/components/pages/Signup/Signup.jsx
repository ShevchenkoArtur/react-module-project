import React, {useEffect} from 'react';
import {Box, Paper, TextField, Typography} from '@mui/material';
import Button from '@mui/material/Button';
import {yupResolver} from '@hookform/resolvers/yup';
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from "react-redux";
import signupValidation from "../../../validationSchemes/signupValidation";
import {updateRegisterUserData} from '../../../redux/reducers/users/actions/creators';
import './../Login/form.css'

const Signup = () => {
    const history = useHistory()
    const {registerInputValues} = useSelector(state => state.users)
    const dispatch = useDispatch()

    const {register, formState: {errors}, handleSubmit, setValue} = useForm({
        resolver: yupResolver(signupValidation()),
        mode: 'all'
    })

    useEffect(() => {
        setValue('firstName', registerInputValues.firstName)
        setValue('lastName', registerInputValues.lastName)
        setValue('username', registerInputValues.username)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onSubmit = (data) => {
        history.push('/second-step')
    }

    return (
        <Box className='formContainer'>
            <Paper elevation={3}>
                <form noValidate className='formStyles' onSubmit={handleSubmit(onSubmit)}>
                    <Typography align='center' fontWeight='bold'>Step 1</Typography>
                    <Box>
                        <TextField
                            {...register('firstName')}
                            error={!!errors.firstName}
                            onChange={(e) => dispatch(updateRegisterUserData('firstName', e.target.value))}
                            helperText={errors?.firstName?.message}
                            type='text'
                            label='First Name'
                            margin='normal'
                            fullWidth
                        />
                    </Box>
                    <Box>
                        <TextField
                            {...register('lastName')}
                            error={!!errors.lastName}
                            onChange={(e) => dispatch(updateRegisterUserData('lastName', e.target.value))}
                            helperText={errors?.lastName?.message}
                            type='text'
                            label='Last Name'
                            margin='normal'
                            fullWidth
                        />
                    </Box>
                    <Box>
                        <TextField
                            {...register('username')}
                            error={!!errors.username}
                            onChange={(e) => dispatch(updateRegisterUserData('username', e.target.value))}
                            helperText={errors?.username?.message}
                            type='text'
                            label='Username'
                            margin='normal'
                            fullWidth
                        />
                    </Box>
                    <Box mt={2}>
                        <Button fullWidth variant='contained' type='submit'>Next Step</Button>
                    </Box>
                    <Box mt={2}>
                        <Button onClick={() => history.push('/')} fullWidth>Login</Button>
                    </Box>
                </form>
            </Paper>
        </Box>
    )
}

export default Signup;
