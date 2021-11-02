import React, {useEffect} from 'react';
import {Box, Container, InputLabel, MenuItem, Select, TextField, Typography} from '@mui/material';
import Button from '@mui/material/Button';
import {yupResolver} from '@hookform/resolvers/yup';
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import secondStepValidation from '../../../../validationSchemes/secondStepValidation';
import DatePicker from '../../../UI/DatePicker/DatePicker';
import {useDispatch, useSelector} from 'react-redux';
import {updateRegisterUserData} from '../../../../redux/reducers/users/actions/creators';
import FormControl from '@mui/material/FormControl';

const SecondStep = () => {
    const {registerInputValues} = useSelector(state => state.users)
    const dispatch = useDispatch()
    const history = useHistory()

    const {register, formState: {errors}, handleSubmit, setValue} = useForm({
        resolver: yupResolver(secondStepValidation())
    })

    const formStyles = {
        maxWidth: '600px',
        border: '1px solid grey',
        borderRadius: '5px',
        padding: '30px'
    }

    useEffect(() => {
        setValue('email', registerInputValues.email)
        setValue('birthday', registerInputValues.birthday)
        setValue('gender', registerInputValues.gender)
    }, [setValue, registerInputValues.email, registerInputValues.birthday, registerInputValues.gender])

    const onSubmit = (data) => {
        if (registerInputValues.firstName && registerInputValues.lastName && registerInputValues.username) {
            history.push('/third-step')
        } else {
            history.push('/signup')
        }
    }

    return (
        <Container style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80vh'}}>
            <form noValidate style={formStyles} onSubmit={handleSubmit(onSubmit)}>
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
                    <DatePicker
                        value={registerInputValues.birthday}
                        onChange={(newValue) => dispatch(updateRegisterUserData('birthday', newValue))}
                    />
                </Box>

                <Box mt={3}>
                    <FormControl fullWidth>
                        <InputLabel id="gender-label">Gender</InputLabel>
                        <Select
                            labelId="gender-label"
                            value={registerInputValues.gender}
                            onChange={(e) => dispatch(updateRegisterUserData('gender', e.target.value))}
                            label="Gender"
                        >
                            <MenuItem value='Male'>Male</MenuItem>
                            <MenuItem value='Female'>Female</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box mt={3}>
                    <Button fullWidth variant='contained' type='submit'>Next Step</Button>
                </Box>
                <Box mt={3}>
                    <Button onClick={() => history.push('/signup')} fullWidth>Previous</Button>
                </Box>
            </form>
        </Container>
    )
}

export default SecondStep;