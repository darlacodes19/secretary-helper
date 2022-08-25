// Projects CRUD logic 
const projectTask = require('../db/models/projectTask');

//@desc get all projects tasks
//@route GET 
//@access Private

const getAllProjectTasks = async (req, res) => {
    try{
        const task = await projectTask.find()
        return res.status(200).json({task})

     }catch(error) {
        return res.status(500).send(error.message);
     }
}

//@desc get a specific project tasks 
//@route GET 
//@access Private

const getOneProjectTask = async(req, res) => {
    try {
        const {id} = req.params;
        const task = await projectTask.findById(id)
        if(task){
            return res.status(200).json({task})
        } return res.status(404).sned('Task not found')
        

    }catch(error){
        return res.status(500).send(error.message)
    }
}


//@desc create a project task
//@route PUT 
//@access Private

const createProjectTask = async (req, res) => {
    try{

        const task = new projectTask(req.body)
        await task.save()
        return res.status(201).json({
            task,
        })

    }catch(error) {
        return res.status(500).json({error:error.message})
    }
}


//@desc delete a project task
//@route DELETE 
//@access Private

const deleteProjectTask = async (req, res) => {
    try {
        const {id} = req.params
        const deleted = await projectTask.findByIdAndDelete(id)
        if(deleted){
            return res.status(200).send('Task deleted')
        }
        throw new error ('Task not found')
    
      }catch(error){
        return res.status(500).send(error.message)
      }
}

//@desc edit member information  (UPDATE)
//@route PUT 
//@access Private

const updateProjectTask = (req, res) => {

    try{

        const {id} = req.params;
        projectTask.findByIdAndUpdate(id, req.body, {new: true}, {err, projectTask})

        if(error) {
            res.status(500).sned(err)
        }
        if (!projectTask) {
            res.status(500).send('Task not found')
        }
    }catch(error){
        return res.status(500).send(error.message)
    }

}


module.exports= {
//Project board 
    updateProjectTask,
    getOneProjectTask,
    getAllProjectTasks,
    createProjectTask,
    deleteProjectTask


    
}

