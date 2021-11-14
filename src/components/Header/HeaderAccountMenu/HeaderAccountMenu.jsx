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
    const {userAccount, sessionId} = useSelector(state => state.users)
    const dispatch = useDispatch()
    const history = useHistory()

    // useEffect(() => {
    //     if (!userAccount) {
    //         if (sessionId) {
    //             dispatch(getAccountAsync(sessionId))
    //         } else {
    //             dispatch(getAccountAsync(localStorage.getItem('session_id')))
    //         }
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    const onLogout = () => {
        dispatch(deleteSessionAsync(sessionId))
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