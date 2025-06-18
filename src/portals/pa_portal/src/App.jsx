import React, { useState } from 'react';
import { Routes , Route } from 'react-router-dom'; // ✅ use only Routes and Route
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import "./App.css";
import SideBar from './components/SideBar';
import MedAlertPro from './pages/MedAlertPro/index.jsx';
import Presription from './pages/Presription/index.jsx';
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
            <Route path="MedAlertPro" element={<MedAlertPro addAlertMessage={addAlertMessage} />} />
            <Route path="Presription" element={<Presription />} />
            <Route path="waitinglist" element={<WaitingList />} />
          </Routes>
           
        </div>
      </div>
      </>
  
  );
};

export default App;

