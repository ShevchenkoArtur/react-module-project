import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import ThemeSwitch from '../UI/ThemeSwitch/ThemeSwitch';
import {useDispatch, useSelector} from 'react-redux';
import {toggleTheme} from '../../redux/reducers/theme/actions/creators';
import Button from '@mui/material/Button';
import deleteSessionAsync from '../../redux/reducers/users/thunks/deleteSessionAsync';
import Box from '@mui/material/Box';
import {useHistory} from 'react-router-dom'

function HideOnScroll(props) {
    const {children} = props
    const trigger = useScrollTrigger()

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    )
}

export default function HideAppBar(props) {
    const history = useHistory()
    const {sessionId} = useSelector(state => state.users)
    const {isLightMode} = useSelector(state => state.theme)
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(deleteSessionAsync(sessionId))
        history.push('/')
    }

    return (
        <>
            <CssBaseline/>
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <ThemeSwitch checked={!isLightMode} onClick={() => dispatch(toggleTheme())}/>
                        <Box>
                            <Button onClick={onLogout}>Log out</Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar/>
        </>
    )
}