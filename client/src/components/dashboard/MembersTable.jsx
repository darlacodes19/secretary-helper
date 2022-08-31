import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'


export default function MembersTable(props) {

  const [member, setMember] = useState({
    firstName: '',
    lastName: '',
    birthDay: '',
    phoneNumber:'',
    address: '',
  })

  const [update, setUpdated] = useState(false)

  const [isClicked, setIsClicked] = useState(false)
  const {id} = useParams()
  //logic to delete 

async function destroy (id) {
 await axios.delete(`http://localhost:3001/routes/members/${id}`)

  console.log('it was deleted')
}

  //logic to edit 
  const handleChange = (event) => { 
  const updatedField = { [event.target.name] : event.target.value}
  const editedItem = Object.assign(member, updatedField)
  setMember(editedItem)
}


  async function handleSubmit ( id) {

    
  await axios.put(`http://localhost:3001/routes/members/${id}` , {member})
  
    
  }

  const clicked = () => {
    setIsClicked(true)
  }


  return (


    <div>

      <table >

        <tbody> 

        <tr> 
          <td> {props.member.firstName} </td> 
          <td> {props.member.lastName} </td> 
          <td> {props.member.phoneNumber} </td> 
          <td> {props.member.birthDay} </td>
          <td> {props.member.address} </td>  
          <td> <button onClick={ clicked}> Edit </button> </td> 
          <td> <button onClick={() => {destroy(props.member._id)}}> Delete </button> </td> 

        </tr> 

        </tbody> 

      </table>
      
      {isClicked &&   <form className="add-member-form" >
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
            <button onClick={ () => {handleSubmit(member._id)}}> Edit </button>
            </form> 
              }

      {/* onClick={destroy(props.member._id)} */}

    </div>
  )
}
