import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import MemberForm from './MemberForm'

export default function MembersTable(props) {

  

  const [isClicked, setIsClicked] = useState(false)
  const {id} = useParams()
  //logic to delete 

async function destroy (id) {
 await axios.delete(`http://localhost:3001/routes/members/${id}`)

  console.log('it was deleted')
}

  //logic to edit 

  async function updateMember (id) {
    // axios.put('http://localhost:3001/routes/members' , {id, newMember})
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
          <td> <button onClick={updateMember}> Edit </button> </td> 
          <td> <button onClick={() => {destroy(props.member._id)}}> Delete </button> </td> 

        </tr> 

        </tbody> 

      </table>
      
      {isClicked &&  <input />  }

      {/* onClick={destroy(props.member._id)} */}

    </div>
  )
}
