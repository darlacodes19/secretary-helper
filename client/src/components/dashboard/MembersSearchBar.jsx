

export default function MembersSearchBar(props) {


  return (

    <div className="members-search">

            <input 
             placeholder="Search"
             className="memebers-search-input"
             type="search"
             input = "text"
             onChange= { (e) => props.setSearchMemebrs(e.target.value)}
            />
        

        
        

    </div>
  )
}
