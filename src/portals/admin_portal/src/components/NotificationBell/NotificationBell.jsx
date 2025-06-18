// components/NotificationBell.jsx
import React, { useState } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import "./NotificationBell.css";

const NotificationBell = ({ notifications }) => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className="notif-bell-container">
      <Badge badgeContent={notifications.length} color="error" onClick={toggleDropdown}>
        <NotificationsIcon style={{ fontSize: '28px', cursor: 'pointer' }} />
      </Badge>
      
      {open && (
        <div className="notif-dropdown">
          {notifications.length === 0 ? (
            <p>No new notifications</p>
          ) : (
            notifications.slice(0, 5).map((notif, index) => (
              <div className="notif-item" key={index}>
                <strong>{notif.title}</strong>
                <p>{notif.message}</p>
                <small>{notif.time}</small>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
