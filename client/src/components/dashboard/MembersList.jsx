import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
import MembersTable from "./MembersTable"
import MembersSearchBar from "./MembersSearchBar"
import MemberForm from "./MemberForm"
import { useMembersContext } from "../../hooks/useMembersContext"

export default function MembersList() {

    const [members, setMembers] = useState([])

    
    const [serachMembers, setSearchMemebrs] = useState('')
    const [isShown, setIsShown] = useState(false)

// function to display data in API 




    const fetchData  = async () => {
        try {   
            const response = await axios.get ('http://localhost:3001/routes/members')
                
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

  function handleClick() {
       setIsShown(true)
  }

  

  return (

    <div className="dashboard-main-section"> 

        

         <MembersSearchBar setMember={setMembers} member= {members} setSearchMemebrs = {setSearchMemebrs}/> 

            <button className="add-member-button" onClick={handleClick}> Add New Member </button> 
            {isShown && <MemberForm setIsShown = {setIsShown} setMembers = {setMembers}/> }
        
            {/* <table> 
                <th> First Name </th> 
                <th> Last Name </th> 
                <th> Phone Number </th> 
                <th> Birthday </th> 
                <th> Address </th>
            </table>  */}
        {/* filter over search results */}

        <div className ='members-table'> 
            {members.filter((value) => {
                if(serachMembers === '') {
                    return value 
                } else if (value.firstName.toLowerCase().includes(serachMembers.toLowerCase())) {
                    return value
                }
            }).map( (member, key) => {
             return <MembersTable  member={member} key={key}/> 
        })}

</div>
        
     </div>
  )
}
