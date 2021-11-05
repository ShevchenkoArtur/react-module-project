import React from 'react';
import {createTheme, ThemeProvider} from '@mui/material';
import {useSelector} from 'react-redux';
import {dark, light} from '../../../theme/config';

const Theme = ({children}) => {
    const {isLightMode} = useSelector(state => state.theme)
    const selectedTheme = createTheme(isLightMode ? light : dark)

    return (
        <ThemeProvider theme={selectedTheme}>
            {children}
        </ThemeProvider>
    )
}

export default Theme;