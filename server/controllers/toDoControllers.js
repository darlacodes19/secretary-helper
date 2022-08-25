// to-do list CRUD
const toDoList = require('../db/models/todo');

//@desc get all to-do list items 
//@route GET router/toDo
//@access Private

const getToDo = async (req, res) => {
        try {

            const items = await toDoList.find()
            return res.status(200).json({items})
            
        }catch(error){
            return res.status(500).send(error.message)
        }
}

//@desc get a specifict do-do list item 
//@route GET router/toDo
//@access Private

const getOneToDo = async (req, res) => {

    try {
        const {id} = req.params;
        const item = await toDoList.findById()
        if(item){
            return res.status(200).json({item})
        }
        return res.status(404).sned('To do list item not found')

    }catch(error){
        return res.status(500).send(error.message)
    }
}


//@desc create a to do item
//@route PUT router/toDo
//@access Private

const createTodo = async (req, res) => {
    try {
        const toDo = new toDoList(req.body)

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
        if(deletedItem) {
            return res.status(200).send("Item deleted")
        }
    }catch(error) {

        return res.status(500).send(error.message)
    }
}

//@desc edite a specific to-do list tiem  (UPDATE)
//@route PUT router/toDo
//@access Private

const updateToDo = (req, res) => {

    try {
        const {id} = req.params
        toDoList.findByIdAndUpdate(id, req.body, {new: true}, {err, item})
        if (error) {
            res.status(500).send(err)
        }
    }catch(error) {
        return res.status(500).send(error.message)
    }
}


module.exports= {
    createTodo,
    deleteToDo,
    getOneToDo,
    getToDo,
    updateToDo
}

