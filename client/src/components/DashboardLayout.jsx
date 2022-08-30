import React from 'react'
import '../styles/dashboard.css'
import ToDoList from './dashboard/ToDoList'


export default function DashboardLayout() {
  return (

    <div className='dashboard-main-section'>
      <ToDoList />
        
    </div>
  )
}
