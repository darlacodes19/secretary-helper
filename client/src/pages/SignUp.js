import {useState} from 'react'
import axios from 'react'
function SignUp () {

    const [name, setName] =  useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [churchName, setChurchName] = useState('')

    async function registerUser(event) {
        event.preventDefault()
       await axios('http://localhost:3001/register' ,{
            method: 'POST'
            headers: {
                'Contet-Type': 'application/json'

            },
            body: JSON.stringify ({
                name,
                email,
                password,
                churchName
            }),
        })

        const data = await Response.json()
        console.log(data)
    }

    return (

        const
        <div> 
            <h1> Creat an Account</h1>
            <form onSubit ={registerUser}> 
                <input 
                type="text" 
                placeholder="Full Name" 
                value={name}
                />
                <input 
                type="text" 
                placeholder="Church Name" 
                value={churchName}
                />
                <input 
                type="email" 
                placeholder="Email" 
                value={email}
                />
                <input 
                type="password" 
                placeholder="password" 
                value={password}
                />
                <input 
                type = "submit" 
                value="register" 
                /> 
            </form>
        </div>
    )
}