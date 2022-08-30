import { useState } from 'react'
import FormSuccess from '../components/FormSuccess'
import RegistrationForm from '../components/RegistrationForm'
import '../styles/form.css'


function Register () {

    const[isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true)
    }

    // const [name, setName] =  useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [churchName, setChurchName] = useState('')
    // const [password2, setPassword2] = useState('')
    

    // async function registerUser(event) {
    //     event.preventDefault()
    //    await axios('http://localhost:3001/routes/users/register' ,{
    //         method: 'POST',
    //         headers: {
    //             'Contet-Type': 'application/json'

    //         },
    //         body: JSON.stringify ({
    //             name,
    //             email,
    //             password,
    //             churchName
    //         }),
    //     })

    //     const data = await Response.json()
    //     console.log(data)
  

    return (
        <div>

           {!isSubmitted ? (<RegistrationForm submitForm={submitForm}/>) : (<FormSuccess />)}
        
            
        </div> 

    )

        
    //     <div className='registration-page'> 
    //         <Logo /> 
    //         <div className='registration-form-container'> 
    //         <img src= {require('../assets/SH2.png')} alt='secretary' className='image'/>
    //         <div className='form-container'> 
    //             <h1> Creat an Account</h1>
    //             <form onSubit ={registerUser} className="registration-form"> 
    //                 <input 
    //                 type="text" 
    //                 placeholder="Full Name" 
    //                 value={name}
    //                 />
    //                 <input 
    //                 type="text" 
    //                 placeholder="Church Name" 
    //                 value={churchName}
    //                 />
    //                 <input 
    //                 type="email" 
    //                 placeholder="Email" 
    //                 value={email}
    //                 />
    //                 <input 
    //                 type="password" 
    //                 placeholder="password" 
    //                 value={password}
    //                 />
    //                 <input 
    //                 type="password2" 
    //                 placeholder="Write password again" 
    //                 value={password2}
    //                 />
    //                 <input 
    //                 type = "submit" 
    //                 value="SignUp" 
    //                 /> 
    //             </form>
    //         </div> 
    //         </div> 
    //     </div>
    // )
}

export default Register