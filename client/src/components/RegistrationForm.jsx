import React from 'react'
import { NavLink } from 'react-router-dom'
import useForm from '../helpers/useFrom'
import validateInfo from '../helpers/validateInfo'


const RegistrationForm = ({submitForm}) => {

    const {handleChange, handleSubmit, values , errors} = useForm(validateInfo, submitForm)
    
  return (
   
    <div className='form-content-right'>
      <form className="registration-from" onSubmit={handleSubmit}>
        <h2> Create an account.</h2>
        <span> Already have an account? <NavLink to={'/login'} > Login Here </NavLink></span> 
        <div className="form-inputs">
            <label className='form-inputs' htmlFor='Name'> 
               Full name 
            </label>
            <input 
                type="text" 
                name="name" 
                className='form-input'
                placeholder='Enter your full name'
                value={values.name}
                onChange={handleChange}
                 /> 
                 {errors.name && <p> {errors.name}</p>}
        </div>
        <div className="form-inputs">
            <label className='form-inputs' htmlFor='church name'> 
               Church Name
            </label>
            <input 
                type="text" 
                name="church name" 
                className='form-input'
                placeholder='Enter your church name'
                value={values.churchName}
                onChange={handleChange}
                 /> 
                   {errors.churchName && <p> {errors.churchName}</p>}
        </div>
        <div className="form-inputs">
            <label className='form-inputs' htmlFor='church name'> 
               Email Address
            </label>
            <input 
                type="email" 
                name="email" 
                className='form-input'
                placeholder='Enter your email'
                value={values.email}
                onChange={handleChange}
                 /> 
                   {errors.email && <p> {errors.email}</p>}
        </div>
        <div className="form-inputs">
            <label className='form-inputs' htmlFor='password'> 
               Passwrod
            </label>
            <input 
                type="password" 
                name="password" 
                className='form-input'
                placeholder='Create a password'
                value={values.password}
                onChange={handleChange}
                 /> 
                   {errors.password && <p> {errors.password}</p>}
        </div>
        <div className="form-inputs">
            <label className='form-inputs' htmlFor='passwrod2'> 
               Confirm password
            </label>
            <input 
                type="password2" 
                name="password2" 
                className='form-input'
                placeholder='Enter your password'
                value={values.password2}
                onChange={handleChange}
                 /> 
                  {errors.password2 && <p> {errors.password2}</p>}
        </div>
        <button className="form-input-btn" type='submit'> SignUp </button>
        
        
        </form>  
       
    </div>
  )
}

export default RegistrationForm