import React from 'react';
import {useHistory} from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import {Typography} from "@mui/material";

const MoviesMenu = () => {
    const history = useHistory()

    const handleClick = (routes) => {
        history.push(routes)
    }

    return (
        <Box sx={{bgcolor: 'inherit'}}>
            <nav>
                <List style={{display: 'flex'}}>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => handleClick('/movies')}>
                            <Typography fontWeight='bold'>Popular</Typography>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => handleClick('/favorite')}>
                            <Typography fontWeight='bold'>Favorites</Typography>
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
        </Box>
    )
}

export default MoviesMenu;