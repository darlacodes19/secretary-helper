import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import ToDoListCard from './ToDoListCard';

export default function ToDoList() {

    const [allTodo, setAllTodo] = useState([]);
    const [newTodo, setNewtodo] = useState('');

    // get all toDos 

    const fetchAll = async () => {
       const response = await axios.get('http://localhost:3001/routes/toDo')
        console.log(response.data.items)
        setAllTodo(response.data.items)
    }

    useEffect ( () => {
        fetchAll()
    },[])

    const createToDo = () => {

    }
  return (
    <div className='to-do-container'>
        <h3 className='to-do-header'> To Do List  </h3>
        <button className='add-task-button'> Add New Task </button>

        {allTodo.map( (task , key) => {
            return <ToDoListCard task={task} key={key}/>
        })}
       

    </div>
  )
}
