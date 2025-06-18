import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/Logo.png';
import "../../App.css";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';  
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';
import { FaShieldAlt } from "react-icons/fa";
import NotificationBell from '../NotificationBell/NotificationBell'; // Importing the Notification Bell
import "./Header.css";

const Header = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const [currentTime, setCurrentTime] = useState("");

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogoClick = () => {
        navigate("/admin");
    };

    // Function to update the current time
    useEffect(() => {
        const interval = setInterval(() => {
            const currentDateTime = new Date();
            const formattedTime = currentDateTime.toLocaleString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            });
            setCurrentTime(formattedTime);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Dummy notifications
    const notifications = [
        { title: "Stock Alert", message: "Panadol stock low", time: "2 mins ago" },
        { title: "Task Assigned", message: "Doctor Review needed", time: "10 mins ago" },
        { title: "Staff Joined", message: "New Nurse: Sana Khan", time: "Today 10:00 AM" },
        { title: "Visit", message: "Dr Ayesha Visiting", time: "Today 10:00 AM" },
        { title: "Visit", message: "AC service ", time: "Today 10:00 AM" },
    ];

    return (
        <header className='d-flex align-items-center'>
            <div className='container-fluid w-100'>
                <div className='row d-flex align-items-center w-100'>

                    {/* Hospital Logo & Name */}
                    <div className='col-sm-3 part1' onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
                        <div className='d-flex align-items-center'>
                            <img src={logo} className='logo' alt="Hospital Logo" />
                            <span className='txt'>Aiwan e Tijarat Hospital</span>
                        </div>
                    </div>

                    {/* Notification Bell + User Profile + Live Date and Time */}
                    <div className='col-sm-9 d-flex align-items-center justify-content-end part3'>
                        <NotificationBell notifications={notifications} />

                        {/* Live Date and Time */}
                        <div className="live-time">
                            <span>{currentTime}</span>
                        </div>

                        <div className='myAccwrapper ms-3'>
                            <Button className='myAcc d-flex align-items-center' onClick={handleClick}>
                                <div className='userImg'>
                                    <span className='rounded-circle'>
                                        <img src="http://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="User" />
                                    </span>
                                </div>
                                <div className='userInfo'>
                                    <h4>Muhammad Bilal</h4>
                                    <p className='mb-0'>@muhammadbilal</p>
                                </div>
                            </Button>

                            {/* Dropdown Menu */}
                            <Menu
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <Divider />
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <PersonAdd fontSize="small" />
                                    </ListItemIcon>
                                    My Account
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <FaShieldAlt fontSize="small"/>
                                    </ListItemIcon>
                                    Reset Password
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <Logout fontSize="small" />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;
