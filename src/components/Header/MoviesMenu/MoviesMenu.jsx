import React from 'react';
import DropDownMenu from '../../UI/DropDownMenu/DropDownMenu';
import MenuItem from '@mui/material/MenuItem';
import {useHistory} from 'react-router-dom'

const MoviesMenu = () => {
    const history = useHistory()
    const [anchor, setAnchor] = React.useState(null)

    const handleClick = (routes) => {
        setAnchor(null)
        history.push(routes)
    }

    return (
        <DropDownMenu anchor={anchor} setAnchor={setAnchor}>
            <MenuItem onClick={() => handleClick('/movies')}>Popular</MenuItem>
            <MenuItem onClick={() => handleClick('/favorite')}>Favorite</MenuItem>
        </DropDownMenu>
    )
}

export default MoviesMenu;