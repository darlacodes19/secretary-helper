// members CRUD logic 
const member = require('../db/models/member');

//@desc get all memebrs
//@route GET 
//@access Private

const getMember = (req, res) => {

}

//@desc get a specifict member
//@route GET 
//@access Private

const getOneMember= (req, res) => {

}


//@desc create a memeber 
//@route POST
//@access Private

const createMember = async (req, res) => {
    
}


//@desc delete a member
//@route DELETE 
//@access Private

const deleteMember = async (req, res) => {
  
}

//@desc edit member information  (UPDATE)
//@route PUT 
//@access Private

const updateMember = (req, res) => {

}


module.exports= {

    updateMember,
    getMember,
    getOneMember,
    createMember,
    deleteMember,
}

