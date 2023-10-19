import React from 'react'
import CNavbar from '../Components/Navbar'
import { Outlet } from "react-router-dom";


const Root = () => {
  return (
    <div>
      <CNavbar/>
      <Outlet/>
    </div>
  )
}

export default Root
