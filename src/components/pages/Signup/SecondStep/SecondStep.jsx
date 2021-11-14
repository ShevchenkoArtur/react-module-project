import React, {useEffect} from 'react';
import {Box, InputLabel, MenuItem, Paper, Select, TextField, Typography} from '@mui/material';
import Button from '@mui/material/Button';
import {yupResolver} from '@hookform/resolvers/yup';
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import secondStepValidation from '../../../../validationSchemes/secondStepValidation';
import {useDispatch, useSelector} from 'react-redux';
import {updateRegisterUserData} from '../../../../redux/reducers/users/actions/creators';
import FormControl from '@mui/material/FormControl';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import './../../Login/form.css'

const SecondStep = () => {
    const {registerInputValues} = useSelector(state => state.users)
    const dispatch = useDispatch()
    const history = useHistory()

    const {register, formState: {errors}, handleSubmit, setValue} = useForm({
        resolver: yupResolver(secondStepValidation()),
        mode: 'all'
    })

    useEffect(() => {
        setValue('email', registerInputValues.email)
        setValue('birthday', registerInputValues.birthday)
        setValue('gender', registerInputValues.gender)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onSubmit = (data) => {
        if (registerInputValues.firstName && registerInputValues.lastName && registerInputValues.username) {
            history.push('/third-step')
        } else {
            history.push('/signup')
        }
    }

    return (
        <Box className='formContainer'>
            <Paper elevation={3}>
                <form noValidate className='formStyles' onSubmit={handleSubmit(onSubmit)}>
                    <Typography align='center' fontWeight='bold'>Step 2</Typography>
                    <Box mt={3}>
                        <TextField
                            {...register('email')}
                            error={!!errors.email}
                            helperText={errors?.email?.message}
                            onChange={(e) => dispatch(updateRegisterUserData('email', e.target.value))}
                            type='email'
                            label='Email'
                            fullWidth
                        />
                    </Box>
                    <Box mt={3}>
                        <DesktopDatePicker
                            disableFuture={true}
                            label='Birthday'
                            value={registerInputValues.birthday}
                            onChange={(newValue) => dispatch(updateRegisterUserData('birthday', newValue))}
                            renderInput={
                                (params) =>
                                    <TextField
                                        {...params}
                                        fullWidth
                                        error={!!errors.birthday}
                                        helperText={errors?.birthday?.message}
                                    />
                            }
                        />
                    </Box>
                    <Box mt={3}>
                        <FormControl fullWidth>
                            <InputLabel id="gender-label">Gender</InputLabel>
                            <Select
                                {...register('gender')}
                                error={!!errors.gender}
                                labelId="gender-label"
                                value={registerInputValues.gender}
                                onChange={(e) => dispatch(updateRegisterUserData('gender', e.target.value))}
                                label="Gender"
                            >
                                <MenuItem value='Male'>Male</MenuItem>
                                <MenuItem value='Female'>Female</MenuItem>
                            </Select>
                            <Typography
                                variant="inherit"
                                color="#d42b2b"
                                fontSize='0.75rem'
                                style={{marginTop: '3px', marginLeft: '14px'}}
                            >
                                {errors?.gender?.message}
                            </Typography>
                        </FormControl>
                    </Box>
                    <Box mt={3}>
                        <Button fullWidth variant='contained' type='submit'>Next Step</Button>
                    </Box>
                    <Box mt={3}>
                        <Button onClick={() => history.push('/signup')} fullWidth>Previous</Button>
                    </Box>
                </form>
            </Paper>
        </Box>
    )
}

export default SecondStep;
