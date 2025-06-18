// App.jsx
import { Routes, Route } from "react-router-dom";
import Login from "./portals/login_portal/src/App.jsx";
import Reception from "./portals/Reception/src/App.jsx";
import PA from "./portals/pa_portal/src/App.jsx";
import Doctor from "./portals/dr_portal/src/App.jsx";
import Admin from "./portals/admin_portal/src/App.jsx";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Login />} />
      <Route path="/reception/*" element={<Reception />} /> 
      <Route path="/pa/*" element={<PA />} />
      <Route path="/doctor/*" element={<Doctor />} />
      <Route path="/admin/*" element={<Admin />} />

    </Routes>
  );
}

export default App



