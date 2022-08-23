const toDoList = require('../db/models/todo');

// to-do list CRUD

//CREATE an item in the to-do list  
const createTodo = async (req, res) => {
    try {
        const toDo = await new toDoList(req.body)

        await toDo.save()
        return res.status(201).json({toDo})
    }catch(error) {
        return res.status(500).json({error: error.message})
    }
}

//Delete an item in the to-do list 

const deleteToDo = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedItem = await toDoList.findByIdAndDelete(id) 
    }catch(error) {

    }
}