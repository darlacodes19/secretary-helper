// Projects CRUD logic 
const Project = require('../db/models/project');


//@desc get all projects
//@route GET 
//@access Private

const getAllProjects = async (req, res) => {
     try{
        const projects = await Project.find()
        return res.status(200).json({projects})

     }catch(error) {
        return res.status(500).send(error.message);
     }
}

//@desc get a specific project
//@route GET 
//@access Private

const getOneProject= async (req, res) => {
    try {
        const {id} = req.params;
        const project = await Project.findById(id)
        if(project ){
            return res.status(200).json({project})
        } return res.status(404).sned('Project not found')
        

    }catch(error){
        return res.status(500).send(error.message)
    }
}


//@desc create a project
//@route PUT 
//@access Private

const createProject = async (req, res) => {
    try{

        const project = new Project(req.body)
        await project.save()
        return res.status(201).json({
            project,
        })

    }catch(error) {
        return res.status(500).json({error:error.message})
    }
}


//@desc delete a project
//@route DELETE 
//@access Private

const deleteProject = async (req, res) => {
  try {
    const {id} = req.params
    const deleted = await Project.findByIdAndDelete(id)
    if(deleted){
        return res.status(200).send('Project deleted')
    }
    throw new error ('Project not found')

  }catch(error){
    return res.status(500).send(error.message)
  }
}

//@desc edit member information  (UPDATE)
//@route PUT 
//@access Private

const updateProject = (req, res) => {
    try{

        const {id} = req.params;
        Project.findByIdAndUpdate(id, req.body, {new: true}, {err, Project})

        if(error) {
            res.status(500).sned(err)
        }
        if (!Project) {
            res.status(500).send('Project not found')
        }
    }catch(error){
        return res.status(500).send(error.message)
    }

}


module.exports= {
//Project board 
    updateProject,
    getOneProject,
    getAllProjects,
    createProject,
    deleteProject


    
}

