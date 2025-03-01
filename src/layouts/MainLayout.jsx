import { Outlet } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import Navbar from "../components/Navbar"


const MainLayout = () => {
  return (
    <>
       <Navbar />
         <Outlet />
       {/* there the actual component content      */}
       <ToastContainer />
    </>
  )
}

export default MainLayout
