import Button from '@mui/material/Button';
import { FaBed } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { FaWpforms } from "react-icons/fa";
import { CiBoxList } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';



const SideBar = () => {
    const navigate = useNavigate();

    const handleNavigateR = () => {
        navigate("/pa/MedAlertPro")
    }

    const handleNavigateA = () => {
        navigate("/pa/Presription")
    }

    const handleNavigateW = () => {
        navigate("/pa/WaitingList")
    }

    const handleNavigateS = () => {
        navigate("/Test")
    }



    
    return(
        <>
        <div className="sidebar">
            <ul>
                <li>
                    <Button className='w-100' onClick={handleNavigateR}>
                        <span className='icon'><FaBed/></span>
                        MedAlert Pro
                        <span className='arrow'><FaAngleRight/></span>
                    </Button>
                </li>
            </ul>
            <ul>
                <li>
              
                    <Button className='w-100' onClick={handleNavigateA}>
                        <span className='icon'><FaWpforms/></span>
                        Prescription & Managment
                        <span className='arrow'><FaAngleRight/></span>
                    </Button>
                   
                </li>
            </ul>
            <ul>
                <li>
                
                    <Button className='w-100' onClick={handleNavigateW}>
                        <span className='icon'><CiBoxList/></span>
                        WaitingList
                        <span className='arrow'><FaAngleRight/></span>
                    </Button>
             
                </li>
            </ul>
         
        </div>
        </>
    )
}

export default SideBar