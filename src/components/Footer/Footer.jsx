import AppBar from '@mui/material/AppBar';
import {Container} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Footer() {
    return (
        <AppBar position="static" color="primary" style={{marginTop: 'auto'}}>
            <Container>
                <Toolbar style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography variant="body2" color="inherit">
                        © 2021 Movies App
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
