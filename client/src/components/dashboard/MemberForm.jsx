import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function MemberForm(props) {

    const navigate = useNavigate();
    const [member, setMember] = useState ( {
        firstName: '',
        lastName: '',
        phoneNumber:'',
        birthDay: '',
        address: '',
    })

    //logic to create a new user 
    const [createdMember, setCreatedMember] = useState(null)

    const handleChange = (event) => {
        const updatedField = { [event.target.name] : event.target.value}
        const editedItem = Object.assign( member, updatedField)

        setMember(editedItem)
    }

    const handleSubmit = (event) => {
        
        event.preventDefault()
    
    axios ( {
        url: 'http://localhost:3001/routes/members',
        method: 'POST',
        data: member
    }).then(res => setCreatedMember(res.data.item).catch(console.error))

    props.setIsShown(false)
    
}

function cancelButton () {
    props.setIsShown(false)
}




  return (

    <div>
        <form className="add-member-form" onSubmit={handleSubmit}>
            <input 
            type='text'
            placeholder="First Name" 
            onChange={handleChange}
            defaultValue = {member.firstName}
            name='firstName'
            /> 
            <input
            type='text'
            placeholder="Last Name"
            onChange={handleChange}
            defaultValue = {member.lastName}
            name='lastName'
             />     
            <input 
            type='text'
            placeholder="Phone Number"
            onChange={handleChange}
            defaultValue = {member.phoneNumber}
            name='phoneNumber'
            /> 
            <input 
            type='text'
            placeholder="Birthday"
            onChange={handleChange}
            defaultValue = {member.birthDay}
            name='birthDay'
          
            /> 
            <input 
            type='text'
            placeholder="Address"
            onChange={handleChange}
            defaultValue = {member.address}
            name='address'
            /> 
            
            <button onClick={handleSubmit} type='button'> Add </button>  
            <button onClick={cancelButton}> Cancel </button> 
        </form> 

    </div>
  )
}
