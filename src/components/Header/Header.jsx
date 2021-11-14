import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeSwitch from '../UI/ThemeSwitch/ThemeSwitch';
import {useDispatch, useSelector} from 'react-redux';
import {toggleTheme} from '../../redux/reducers/theme/actions/creators';
import MoviesMenu from './MoviesMenu/MoviesMenu';
import HeaderAccountMenu from "./HeaderAccountMenu/HeaderAccountMenu";
import Box from "@mui/material/Box";
import HideOnScroll from "./HideOnScroll/HideOnScroll";

const Header = (props) => {
    const {sessionId} = useSelector(state => state.users)
    const {isLightMode} = useSelector(state => state.theme)
    const dispatch = useDispatch()

    return (
        <>
            <CssBaseline/>
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Box>
                            {
                                (sessionId || localStorage.getItem('session_id')) && <MoviesMenu/>
                            }
                        </Box>
                        <Box style={{display: 'flex', alignItems: 'center'}}>
                            <ThemeSwitch checked={!isLightMode} onClick={() => dispatch(toggleTheme())}/>
                            {
                                (sessionId || localStorage.getItem('session_id')) && <HeaderAccountMenu/>
                            }
                        </Box>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar/>
        </>
    )
}

export default Header;
