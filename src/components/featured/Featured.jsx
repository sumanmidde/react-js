import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./featured.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
function Featured() {
    return (<div className="featured">
        <div className="top">
            <h1 className="main">
                Total Revenue
            </h1>
            <MoreVertIcon fontSize='small' />
        </div>

        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={20} text='20%' strokeWidth={3} />
            </div>
            <p className="title"> this circular progress bar      </p>
            <p className="amount">$430</p>
            <p className="desc">this is new circular graph.</p>
            <div className="summary">
                <div className="item1">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult negitive">
                        <KeyboardArrowDownIcon fontSize='small' />
                        <div className="itemAmout">6.01k</div>
                    </div>
                </div>
                <div className="item1">
                    <div className="itemTitle">Week Ago</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpIcon fontSize='small' />
                        <div className="itemAmout">6.03k</div>
                    </div>
                </div>
                <div className="item1">
                    <div className="itemTitle">Two Weeks Ago</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpIcon fontSize='small' />
                        <div className="itemAmount">6.05k</div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Featured;