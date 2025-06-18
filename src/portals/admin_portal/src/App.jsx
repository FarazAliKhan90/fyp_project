import React, { useState } from 'react';
import {  Route , Routes } from 'react-router-dom'; // ✅ BrowserRouter add kiya
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import "./App.css";
import SideBar from './components/SideBar';
import EnrollNewStaff from './pages/EnrollNewStaff/index.jsx';
import StaffRecord from './pages/StaffRecord/StaffRecord.jsx';
import AssignTask from './pages/AssignTask/TaskAssignment.jsx';
import Attendance from './pages/Attendance/Attendance.jsx';

const App = () => {
  const [alertMessages, setAlertMessages] = useState([]);

  const addAlertMessage = (newMessage) => {
    setAlertMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
   
      <>
        <Header />
        <div className='main d-flex'>
          <div className='sidebarwrapper'>
            <SideBar />
          </div>
          <div className='content'>
            <Routes>
              <Route index element={<Dashboard alertMessages={alertMessages} />} />
              <Route path="EnrollNewStaff" element={<EnrollNewStaff addAlertMessage={addAlertMessage} />} />
              <Route path="StaffRecord" element={<StaffRecord addAlertMessage={addAlertMessage} />} />
              <Route path="AssignTask" element={<AssignTask addAlertMessage={addAlertMessage} />} />
              <Route path="Attendance" element={<Attendance />} />
            </Routes>
          </div>
        </div>
      </>
  
  );
};

export default App;


