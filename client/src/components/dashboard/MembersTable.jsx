import React from 'react'

export default function MembersTable(props) {


  return (


    <div>

      <table>

        <tbody> 

        <tr> 
          <td> {props.member.firstName} </td> 
          <td> {props.member.lastName} </td> 
          <td> {props.member.phoneNumber} </td> 
          <td> {props.member.birthDay} </td>
          <td> {props.member.address} </td>  
          <td> <button> Edit </button> </td> 
          <td> <button> Delete </button> </td> 

        </tr> 

        </tbody> 

      </table>



    </div>
  )
}
