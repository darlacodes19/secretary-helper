import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import ToDoListCard from './ToDoListCard';

export default function ToDoList() {

    const [allTodo, setAllTodo] = useState([]);
    const [newTodo, setNewtodo] = useState({
        task: '',
        due: '',
        priority: '',
    });
    const[isShown, setIsShown]= useState(false);
    const [createdTask, setCreatedTask] = useState('')

    // get all toDos 

    const fetchAll = async () => {
       const response = await axios.get('http://localhost:3001/routes/toDo')
        console.log(response.data.items)
        setAllTodo(response.data.items)
    }

    useEffect ( () => {
        fetchAll()
    },[])

// Create new task

   
    const handleChange = (event) => {
        const updatedField = { [event.target.name] : event.target.value}
        const editedItem = Object.assign( newTodo, updatedField)

        setNewtodo(editedItem)
    }

    const createToDo = (event) => {
            event.preventDefault()

            axios( { 
                url:'http://localhost:3001/routes/toDo',
                method: 'POST',
                data: newTodo

            }).then(res => setNewtodo(res.data.newTodo).catch(console.error))
            
            setIsShown(false)
            console.log(newTodo)
    }

    const addNewTaskForm = () => {
        setIsShown(true)
    }

    


  return (
    <div className='to-do-container'>
        <h3 className='to-do-header'> To Do List  </h3>
        <button className='add-task-button' onClick={addNewTaskForm}> Add New Task </button>

        {isShown && 
        <form onSubmit={createToDo}> 
            <input 
            placeholder='Task name'
            onChange={handleChange}
            name ='task'
            defaultValue={newTodo.task}/>
            <input 
            placeholder='Priority'
            onChange={handleChange}
            name = 'priority'
            defaultValue={newTodo.priority}/>
            <input 
            placeholder='Due'
            onChange={handleChange}
            name = 'due'
            defaultValue={newTodo.due}/>
            <button onClick={createToDo}> Add </button>
         </form>}

        {allTodo.map( (task , key) => {
            return <ToDoListCard task={task} key={key}/>
        })}
       

    </div>
  )
}
