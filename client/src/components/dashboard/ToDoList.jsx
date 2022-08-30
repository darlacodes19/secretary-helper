import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

export default function ToDoList() {

    const [allTodo, setAllTodo] = useState([]);
    const [newTodo, setNewtodo] = useState('');

    // get all toDos 

    const fetchAll = async () => {
       const response = await axios.get('http://localhost:3001/routes/toDo')
        console.log(response ,'hello')
    }

    useEffect ( () => {
        fetchAll()
    },[])

    const createToDo = () => {

    }
  return (
    <div>
        <h3> To Do </h3>
        <input
        type='text'
        />
        <button> Add </button>
       

    </div>
  )
}
