import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
import MembersTable from "./MembersTable"
import MembersSearchBar from "./MembersSearchBar"

export default function MembersList() {

    const [members, setMembers] = useState([])

// function to display data in API 
    const fetchData  = async () => {
        try {   
            const response = await axios.get('http://localhost:3001/routes/members')
            console.log(response.data.members)
            setMembers(response.data.members)
            

        }catch(error) {
            console.error(error)
        }
    }
 useEffect ( () => {
    fetchData()
 }, [])
    
  console.log(members + 'this is members')


  //function to add a new member to the database 

  

  return (

    <div className="dashboard-main-section"> 

        <MembersSearchBar setMember={setMembers} member= {members}/> 

            <button className="add-member-button"> Add New Member </button> 
        
            {/* <table> 
                <th> First Name </th> 
                <th> Last Name </th> 
                <th> Phone Number </th> 
                <th> Birthday </th> 
                <th> Address </th>
            </table>  */}
            {members.map( (member, key) => {
             return <MembersTable  member={member} key={key}/> 
        })}
        
     </div>
  )
}
