import React from 'react';
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import {baseImgUrl} from "../../../api/api";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";
import AccountMenu from "../../UI/AccountMenu/AccountMenu";
import {useDispatch, useSelector} from "react-redux";
import deleteSessionAsync from "../../../redux/reducers/users/thunks/deleteSessionAsync";
import {useHistory} from "react-router-dom";

const HeaderAccountMenu = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {userAccount} = useSelector(state => state.users)

    const onLogout = () => {
        dispatch(deleteSessionAsync(localStorage.getItem('session_id')))
        history.push('/')
    }

    return (
        <AccountMenu>
            <MenuItem onClick={() => history.push('/profile')}>
                <Avatar>
                    <img
                        width='32'
                        height='32'
                        src={`${baseImgUrl}/${userAccount && userAccount?.avatar.tmdb.avatar_path}`}
                        alt='avatar'
                    />
                </Avatar> Profile
            </MenuItem>
            <Divider/>
            <MenuItem onClick={onLogout}>
                <ListItemIcon>
                    <Logout fontSize="small"/>
                </ListItemIcon>
                Logout
            </MenuItem>
        </AccountMenu>
    )
}

export default HeaderAccountMenu;
