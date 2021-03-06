import React from 'react';
import {Box, Paper, TextField, Typography} from '@mui/material';
import Button from '@mui/material/Button';
import {yupResolver} from '@hookform/resolvers/yup';
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import thirdStepValidation from '../../../../validationSchemes/thirdStepValidation';
import {useDispatch, useSelector} from 'react-redux';
import {singup, updateRegisterUserData} from '../../../../redux/reducers/users/actions/creators';
import './../../Login/form.css'

const ThirdStep = () => {
    const {registerInputValues} = useSelector(state => state.users)
    const dispatch = useDispatch()
    const history = useHistory()

    const {register, formState: {errors}, handleSubmit} = useForm({
        resolver: yupResolver(thirdStepValidation()),
        mode: 'all'
    })

    const onSubmit = (data) => {
        if (registerInputValues.firstName && registerInputValues.lastName && registerInputValues.username && registerInputValues.email) {
            dispatch(singup())
            history.push('/')
        } else {
            history.push('/signup')
        }
    }

    return (
        <Box className='formContainer'>
            <Paper elevation={3}>
                <form noValidate className='formStyles' onSubmit={handleSubmit(onSubmit)}>
                    <Typography align='center' fontWeight='bold'>Step 3</Typography>
                    <Box>
                        <TextField
                            {...register('password')}
                            error={!!errors.password}
                            helperText={errors?.password?.message}
                            onChange={(e) => dispatch(updateRegisterUserData('password', e.target.value))}
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
                            onChange={(e) => dispatch(updateRegisterUserData('confirmedPassword', e.target.value))}
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
                        <Button onClick={() => history.push('/second-step')} fullWidth>Previous</Button>
                    </Box>
                </form>
            </Paper>
        </Box>
    )
}

export default ThirdStep;
