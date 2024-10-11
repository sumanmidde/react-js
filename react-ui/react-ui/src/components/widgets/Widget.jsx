import React from 'react';
import KeyboardControlKeyIcon from '@mui/icons-material/KeyboardControlKey';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import './widget.css';
function Widget() {
    // let data;
    // const amount = 1000;
    const differ = 30;
    // switch (type) {
    //     case "user":
    //         data = {
    //             title: "USERS",
    //             isMoney: false,
    //             link: "SEE ALL USERS",
    //             icon: <PersonOutlineIcon className="personlogo" />
    //         };
    //         break;
    //     default:
    //         break;

    // }

    return (
        <div className="widget">
            <div className="leftl">
                <span className="title">Users</span>
                <span className="count">4571</span>
                <span className="link">See all users </span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardControlKeyIcon />{differ}%</div>
                <PersonOutlineIcon className="personlogo" />
            </div>
        </div>
    );

}

export default Widget;