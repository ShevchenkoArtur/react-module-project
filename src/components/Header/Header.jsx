import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import ThemeSwitch from '../UI/ThemeSwitch/ThemeSwitch';
import {useDispatch, useSelector} from 'react-redux';
import {toggleTheme} from '../../redux/reducers/theme/actions/creators';

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
    const {isLightMode} = useSelector(state => state.theme)
    const dispatch = useDispatch()

    return (
        <>
            <CssBaseline/>
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6" component="div">
                            <ThemeSwitch checked={!isLightMode} onClick={() => dispatch(toggleTheme())}/>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar/>
        </>
    )
}