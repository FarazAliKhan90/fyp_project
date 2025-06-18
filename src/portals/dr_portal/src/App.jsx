

import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import "./App.css";
import SideBar from './components/SideBar';
import TaskManager from './pages/TaskManager/index.jsx';
import Shedule from './pages/Shedule/index.jsx';
import WaitingList from './pages/WaitingList/index.jsx';

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
            <Route path="TaskManager" element={<TaskManager addAlertMessage={addAlertMessage} />} />
            <Route path="Shedule" element={<Shedule />} />
            <Route path="waitinglist" element={<WaitingList />} />
          </Routes>
        </div>
      </div>
      </>
    
  );
};

export default App;
