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
import {useEffect} from 'react';
import {getSessionId, getUserAccount} from '../../redux/reducers/users/actions/creators';

const Header = (props) => {
    const {sessionId, userAccount} = useSelector(state => state.users)
    const {isLightMode} = useSelector(state => state.theme)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!sessionId && localStorage.getItem('session_id')) {
            dispatch(getSessionId(localStorage.getItem('session_id')))
        }

        if(localStorage.getItem('user_account') && !userAccount) {
            dispatch(getUserAccount(JSON.parse(localStorage.getItem('user_account'))))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <CssBaseline/>
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Box>
                            {
                                sessionId &&  <MoviesMenu/>
                            }
                        </Box>
                        <Box style={{display: 'flex', alignItems: 'center'}}>
                            <ThemeSwitch checked={!isLightMode} onClick={() => dispatch(toggleTheme())}/>
                            {
                                sessionId && <HeaderAccountMenu/>
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
