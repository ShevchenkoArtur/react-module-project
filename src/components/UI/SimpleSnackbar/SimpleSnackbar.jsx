import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {useDispatch, useSelector} from 'react-redux';
import {setOpener} from '../../../redux/reducers/snackbar/actions/creators';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={3} ref={ref} variant="filled" {...props} />
})

const SimpleSnackbars = () => {
    const {isOpen, message} = useSelector(state => state.snackbar)
    const dispatch = useDispatch()

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        dispatch(setOpener(false))
    }

    return (
        <Stack>
            <Snackbar open={isOpen} autoHideDuration={3000} onClose={handleClose}
                      anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}>
                <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
                    {message}
                </Alert>
            </Snackbar>
        </Stack>
    )
}

export default SimpleSnackbars;
