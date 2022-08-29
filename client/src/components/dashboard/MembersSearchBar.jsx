import { useState } from "react"

export default function MembersSearchBar(props) {

      const [serachMembers, setSearchMemebrs] = useState('')

      props.member.filter ((e) => {
            return e = props.member.firstName
      })


      

  return (

    <div>

            <input 
             placeholder="Search"
             className="memebers-search-input"
             type="search"
             input = "text"
             onChange= { (e) => setSearchMemebrs(e.target.value)}
            />
        

        {serachMembers}
        

    </div>
  )
}
