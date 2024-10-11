import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';
import "./navbar.css";
function NavBar() {
    return (<div className="nav">
        <div className="wrapper">
            <div className="search">
                <input type="text" placeholder='search here....' />
                <SearchIcon className="ico" />
            </div>
            <div className="items">
                <div className="item">
                    <LanguageIcon className="ico" /> English
                </div >
                <div className="item">
                    <NotificationsActiveIcon className="ico" />
                    <div className="counter">1</div>
                </div>
                <div className="item">
                    <FullscreenIcon className="ico" />
                </div>
                <div className="item">
                    <ChatBubbleOutlineIcon className="ico" />
                    <div className="counter">2</div>
                </div>
                <div className="item">
                    <ListIcon className="ico" />
                </div>
                <div className="item">
                    <img
                        src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
                        alt=''
                        className='avatar'
                    />
                </div>
            </div>

        </div>
    </div>);
}

export default NavBar;