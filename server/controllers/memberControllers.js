// members CRUD logic 
const Member = require('../db/models/member');

//@desc get all memebrs
//@route GET 
//@access Private

const getMembers = async (req, res) => {
    
    try {
        const members = await Member.find()
        return res.status(200).json({members})

    }catch(error) {
        return res.status(500).send(error.message)
    }
}

//@desc get a specifict member
//@route GET 
//@access Private

const getOneMember = async (req, res) => {
    try{

        const {id} = req.params;
        const member =  await Member.findById(id)
        if(member){
            return res.status(200).json({member})
        }
        return res.status(404).send('member not found')

    }catch(error){
        return res.status(500).send(error.message)
    }
}


//@desc create a memeber 
//@route POST
//@access Private

const createMember = async (req, res) => {
    try{
        const member = new Member(req.body)
        await member.save()
        return res.status(201).json({member})

    }catch(error) {
        return res.status(500).send(error.message)
    }
}


//@desc delete a member
//@route DELETE 
//@access Private

const deleteMember = async (req, res) => {
  try{

    const {id} = req.params;
    const deleted = await Member.findByIdAndDelete(id)
    if (deleted) {
        return res.status(200).send('Member deleted')
    }
  }catch(error){
    return res.status(500).send(error.message)
  }
}

//@desc edit member information  (UPDATE)
//@route PUT 
//@access Private

const updateMember = (req, res) => {
    try {
        const {id} = req.params
        Member.findByIdAndUpdate(id, req.body, {new: true}, {err, Member})

        if (error) {
            res.status(500).send(err)
        }
        if(!item) {
            res.status(500).send('Member not found')
            
        }
        return res.status(200).json(item)
    }catch(error){
        return res.status(500).send(error.message)
    }
}


module.exports= {

    updateMember,
    getMembers,
    getOneMember,
    createMember,
    deleteMember,
}

