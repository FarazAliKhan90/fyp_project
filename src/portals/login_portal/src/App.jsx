// import React from 'react';
// import {  Route, Routes } from 'react-router-dom';
// import SignupPage from './pages/Signup/SignupPage.jsx';
// import LoginPage from './pages/Login/LoginPage.jsx';
// import ForgotPassword from './pages/ForgotPassword/ForgotPassword.jsx';
// import ResetPassword from './pages/ResetPassword/ResetPassword.jsx';


// function App() {
//   return (
    
//       <Routes>
//         {/* Login and Signup Routes */}
//         <Route path="/signup" element={<SignupPage />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/reset-password/:token" element={<ResetPassword/>} />
//         <Route path="*" element={<LoginPage />} />
//        </Routes>
//   );
// }

// export default App;

import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage.jsx";
import SignupPage from "./pages/Signup/SignupPage.jsx";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword.jsx";
import ResetPassword from "./pages/ResetPassword/ResetPassword.jsx";

export default function LoginRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="reset-password/:token" element={<ResetPassword />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}






// import PrivateRoute from './components/ProtectedRoute.jsx';  
        {/* Protected Route (Dashboard) */}
        {/* <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        /> */}

        {/* Optional: Default route to signup */}
        {/* <Route path="*" element={<SignupPage />} /> */}
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/signup" element={<SignupPage />} />
//         <Route path="/login" element={<LoginPage />} />
//         {/* Default route to go to signup page */}
//         <Route path="*" element={<SignupPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// components/App.jsx

