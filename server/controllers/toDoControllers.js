// to-do list CRUD
const toDoList = require('../db/models/todo');

//@desc get all to-do list items 
//@route GET router/toDo
//@access Private

const getToDo = (req, res) => {

}

//@desc get a specifict do-do list item 
//@route GET router/toDo
//@access Private

const getOneToDo= (req, res) => {

}


//@desc create a to do item
//@route PUT router/toDo
//@access Private

const createTodo = async (req, res) => {
    try {
        const toDo = await new toDoList(req.body)

        await toDo.save()
        return res.status(201).json({toDo})
    }catch(error) {
        return res.status(500).json({error: error.message})
    }
}


//@desc delete a to-do list item 
//@route DELETE router/toDo
//@access Private

const deleteToDo = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedItem = await toDoList.findByIdAndDelete(id) 
    }catch(error) {

    }
}

//@desc edite a specific to-do list tiem  (UPDATE)
//@route PUT router/toDo
//@access Private

const updateToDo = (req, res) => {

}


module.exports= {
    createTodo,
    deleteToDo,
    getOneToDo,
    getToDo,
    updateToDo
}

