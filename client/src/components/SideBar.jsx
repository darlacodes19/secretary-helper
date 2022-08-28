import React from 'react'
import '../styles/dashboard.css'
import { NavLink } from 'react-router-dom'



function SideBar() {

  return (
    <div className='dashboard-sidebar'>

        <ul> 
            <div className='dashboard-sidebar-items'> 
                <span class="material-symbols-outlined"> account_circle </span>
                <li>  Profile </li>
            </div> 
            <div className='dashboard-sidebar-items'> 
                <span class="material-symbols-outlined"> dashboard</span>
                <li>  Dashboard </li>
            </div> 
            <div className='dashboard-sidebar-items'> 
                <span class="material-symbols-outlined"> folder_open </span>
                <li> Projects</li>
            </div> 
            <div className='dashboard-sidebar-items'> 
                <span class="material-symbols-outlined"> groups </span>
                <NavLink to ={'/members'} ><li>  Members </li> </NavLink> 
            </div>
            <div className='dashboard-sidebar-items'> 
                <span class="material-symbols-outlined"> calendar_month </span>
                <li> Calender  </li>
            </div> 
        </ul>
    </div> 


  
  )
}

export default SideBar