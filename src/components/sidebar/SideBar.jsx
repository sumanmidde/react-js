import React, { useContext } from 'react';
import './sidebar.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { Link } from "react-router-dom";
import { DarkModeContext } from '../context/darkModeContext';

function SideBar() {
    const { dispatch } = useContext(DarkModeContext);
    return (<div className="sidebar">
        <div className="title">
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">my web</span>
                </Link>

            </div>
            <hr></hr>
            <div className="center">
                <ul>
                    <p className="title">Main</p>
                    <li>
                        <DashboardIcon className='icon' />
                        <span className='span'>Dashboard</span>
                    </li>
                    <li>
                        <AddIcon className='icon' />
                        <span className='span'>items</span>
                    </li>
                    <p className="title">Services</p>
                    <Link to="/list" style={{ textDecoration: "none" }}>
                        <li>

                            <PeopleIcon className='icon' />
                            <span className='span'>Users</span>
                        </li>
                    </Link>

                    <li>
                        <ProductionQuantityLimitsIcon className='icon' />
                        <span className='span'> orders</span>
                    </li>
                    <li>
                        <AssignmentReturnIcon className='icon' />
                        <span className='span'>returns</span>
                    </li>
                    <p className="title">System</p>
                    <li>
                        <NotificationsActiveIcon className='icon' />
                        <span className='span'>notifications</span>
                    </li>
                    <li>
                        <SettingsIcon className='icon' />
                        <span className='span'>settings</span>
                    </li>
                    <li>

                        <HealthAndSafetyIcon className='icon' />
                        <span className='span'>system health</span>
                    </li>
                    <p className="title">Users</p>
                    <li>
                        <PersonPinIcon className='icon' />
                        <span className='span'>profiles</span>
                    </li>
                    <li>
                        <LogoutIcon className='icon' />
                        <span className='span'>log out</span>
                    </li>
                </ul>
            </div>

            <div className="bottom">
                <div className="colorOption" onClick={() => dispatch({ type: "LIGHT" })}></div>
                <div className="colorOption" onClick={() => dispatch({ type: "DARK" })}></div>
                {/* <div className="colorOption"></div> */}
            </div>

        </div>
    </div >);
}

export default SideBar;