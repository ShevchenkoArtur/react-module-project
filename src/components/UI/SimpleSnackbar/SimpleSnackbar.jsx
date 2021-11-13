import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={3} ref={ref} variant="filled" {...props} />
})

const SimpleSnackbars = ({open, setOpen, message}) => {
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        setOpen(false)
    }

    return (
        <Stack>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}
                      anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
                <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
                    {message}
                </Alert>
            </Snackbar>
        </Stack>
    )
}

export default SimpleSnackbars;