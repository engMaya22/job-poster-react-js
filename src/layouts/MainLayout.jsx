import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"


const MainLayout = () => {
  return (
    <>
       <Navbar />
         <Outlet />
       {/* there the actual component content      */}
    </>
  )
}

export default MainLayout
