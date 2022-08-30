import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/form.css'

export default function SignIn() {

  return (

    <div className='form-container'>
            <div className='form-content-left'> 
                <img src= {require('../assets/SH3.png')} alt='secretary' className='form-image'/>
                <h3 id='welcome-message'> Welcome Back !</h3> 
            </div>

        <div className='form-right'>

   
            <form className="signin-form" >
                <h2 className='form-header'> Login </h2>
            
            <div className='form' >
                
                
                <div className="form-inputs">
                <span class="material-symbols-outlined"> mail </span>
                    <input 
                        type="email" 
                        name="email" 
                        className='form-input'
                        placeholder='Email'

                        /> 
                        
                </div>
                <div className="form-inputs">
                <span class="material-symbols-outlined"> lock </span>
                    <input 
                        type="password" 
                        name="password" 
                        className='form-input'
                        placeholder='Password'
                        /> 
                            
                </div>
                
                </div>
                <button className="form-button" type='submit'> Login </button>

                <p> Don't have an account? <NavLink to={'/register'} >   Register Here </NavLink> </p>
            </form>  
        
       
         </div>


    </div>
  )
}
