import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';

const DropDownMenu = ({children, anchor, setAnchor}) => {
    const open = Boolean(anchor)

    const handleClick = (event) => {
        setAnchor(event.currentTarget)
    }

    const handleClose = () => {
        setAnchor(null)
    }

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                variant='text'
            >
                Movies
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchor}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {children}
            </Menu>
        </div>
    )
}

export default DropDownMenu;