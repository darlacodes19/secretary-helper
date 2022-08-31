import axios from 'axios'
import { useParams } from 'react-router-dom'
import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter'

export default function ({task}) {

    
  //logic to delete 

async function destroy (id) {
 await axios.delete(`http://localhost:3001/routes/toDo/${id}`)

  console.log('it was deleted')
}

  return (
    <div className='to-do-list-card'> 
        <h3> {capitalizeFirstLetter(task.task)}</h3>
        <div className='to-do-info'> 
            <span> Priority: {capitalizeFirstLetter(task.priority)} </span>
            <span> Due:  {task.due} </span>
           <button onClick={() => {destroy(task._id)}}> <span className="material-symbols-outlined"> delete </span> </button> 
        </div>
        


    </div>
  )
}
