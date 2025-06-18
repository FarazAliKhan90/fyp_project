// src/components/SideBar.jsx
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { FaBed, FaTachometerAlt, FaClipboardList, FaUsers, FaSignOutAlt, FaChartBar } from 'react-icons/fa';
import { FaAngleRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
const SideBar = () => {
  const navigate = useNavigate();

   return (
    <div className="sidebar">
      <ul>
        <li>
          <Button className='w-100' onClick={() => navigate("/admin")}>
            <span className='icon'><FaTachometerAlt /></span> Dashboard <span className='arrow'><FaAngleRight /></span>
          </Button>
        </li>
        <li>
          <Button className='w-100' onClick={() => navigate("/admin/EnrollNewStaff")}>
            <span className='icon'><FaBed /></span> Enroll Staff <span className='arrow'><FaAngleRight /></span>
          </Button>
        </li>
        <li>
          <Button className='w-100' onClick={() => navigate("/admin/StaffRecord")}>
            <span className='icon'><FaUsers /></span> Staff Records <span className='arrow'><FaAngleRight /></span>
          </Button>
        </li>
        <li>
          <Button className='w-100'  onClick={() => navigate("/admin/AssignTask")}>
            <span className='icon'><FaClipboardList /></span> Assign Tasks <span className='arrow'><FaAngleRight /></span>
          </Button>
        </li>
        <li>
          <Button className='w-100' onClick={() => navigate("/admin/Attendance")}>
            <span className='icon'><FaChartBar /></span> Attendance <span className='arrow'><FaAngleRight /></span>
          </Button>
        </li>
        {/* <li>
          <Button className='w-100'>
            <span className='icon'><FaSignOutAlt /></span> Logout <span className='arrow'><FaAngleRight /></span>
          </Button>
        </li> */}
      </ul>
    </div>
  );
};

export default SideBar;