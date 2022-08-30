const express = require('express');
const router = express.Router();
const toDo = require('../controllers/toDoControllers');
const members = require('../controllers/memberControllers');
const projects = require('../controllers/projectBoardControllers')
const projectTask = require('../controllers/projectTaskControllers')
const passport = require('passport');
const cors = require('cors')


const protect = passport.authenticate('jwt', {session: false})
//TO-DO LIST ROUTES 

    //GET && POST
router.route('/toDo').get(toDo.getToDo).post(toDo.createTodo)
    //DELETE, PUT
router.route('/toDo/:id').delete(toDo.deleteToDo).put(toDo.updateToDo)



//Project Board goals 

    //GET && POST 
router.route('/projects').get(projects.getAllProjects).post(projects.createProject)
    //DELETE, PUT, GET by id 
router.route('/projects/:id').delete(projects.deleteProject).put(projects.updateProject).get(projects.getOneProject)



//Members 

    //GET && POST 
router.route('/members' , cors()).get(members.getMembers).post(members.createMember)
    //DELETE, PUT, GET by id 
router.route('/members/:id' , cors()).delete(members.deleteMember).put(members.updateMember).get(members.getOneMember)

//Project Tasks 

    //GET && POST 
router.route('/projectTask').get(projectTask.getAllProjectTasks).post(projectTask.createProjectTask)
    //DELETE, PUT, GET by id 
router.route('/projectTask/:id').delete(projectTask.deleteProjectTask).put(projectTask.updateProjectTask).get(projectTask.getOneProjectTask)


module.exports = router