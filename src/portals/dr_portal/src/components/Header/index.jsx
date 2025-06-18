import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/Logo.png';
import "../../App.css";
import Button from '@mui/material/Button';

import "./Header.CSS";

const Header = () => {

    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogoClick = () => {
        navigate("/doctor");
    };

    return (
        <>
            <header className='d-flex align-items-center'>
                <div className='container-fluid w-100'>
                    <div className='row d-flex align-items-center w-100'>
                        {/* Hospital Logo & Name */}
                        <div className='col-sm-3 part1' onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
                            <div className='d-flex align-items-center'>
                                <img src={logo} className='logo' alt="Hospital Logo" onClick={handleLogoClick}/>
                                <span className='txt' onClick={handleLogoClick}>Aiwan e Tijarat Hospital</span>
                            </div>
                        </div>

                        {/* User Profile Section (Muhammad Bilal) */}
                        <div className='col-sm-9 d-flex align-items-center justify-content-end part3'>
                            <div className='myAccwrapper'>
                                <Button className='myAcc d-flex align-items-center' onClick={handleClick}>
                                    <div className='userImg'>
                                        <span className='rounded-circle'>
                                            <img src="http://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="" />
                                        </span>
                                    </div>

                                    <div className='userInfo'>
                                        <h4>Muhammad Bilal</h4>
                                        <p className='mb-0'>@muhammadbilal</p>
                                    </div>
                                </Button>

                              
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
