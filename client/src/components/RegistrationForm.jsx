import React from 'react'
import { NavLink } from 'react-router-dom'
import useForm from '../helpers/useFrom'
import validateInfo from '../helpers/validateInfo'


const RegistrationForm = ({submitForm}) => {

    const {handleChange, handleSubmit, values , errors} = useForm(validateInfo, submitForm)
    
  return (
   
    <div className='form-content-right'>
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2 className='form-header'> Register </h2>
        <p> Create your account. Its free and only takes a minute </p> 
        <span> Already have an account? <NavLink to={'/login'} > Login Here </NavLink></span> 
      <div className='form' >
        <div className="form-inputs">
          <span class="material-symbols-outlined" > person </span>
              <input 
                  type="text" 
                  name="name" 
                  className='form-input'
                  placeholder='Full Name'
                  value={values.name}
                  onChange={handleChange}
                  /> 
                  {errors.name && <p> {errors.name}</p>}
        </div>
        <div className="form-inputs">
          <span class="material-symbols-outlined"> church </span>
              <input 
                  type="text" 
                  name="church name" 
                  className='form-input'
                  placeholder='Church Name'
                  value={values.churchName}
                  onChange={handleChange}
                  /> 
                    {errors.churchName && <p> {errors.churchName}</p>}
        </div>
        <div className="form-inputs">
          <span class="material-symbols-outlined"> mail </span>
              <input 
                  type="email" 
                  name="email" 
                  className='form-input'
                  placeholder='Email'
                  value={values.email}
                  onChange={handleChange}
                  /> 
                    {errors.email && <p> {errors.email}</p>}
        </div>
        <div className="form-inputs">
          <span class="material-symbols-outlined"> lock </span>
              <input 
                  type="password" 
                  name="password" 
                  className='form-input'
                  placeholder='Password'
                  value={values.password}
                  onChange={handleChange}
                  /> 
                    {errors.password && <p> {errors.password}</p>}
        </div>
        <div className="form-inputs">
        <span class="material-symbols-outlined"> lock </span>
              <input 
                  type="password2" 
                  name="password2" 
                  className='form-input'
                  placeholder='Confirm Password'
                  value={values.password2}
                  onChange={handleChange}
                  /> 
                    {errors.password2 && <p> {errors.password2}</p>}
        </div>
        </div>
        <button className="form-button" type='submit'> SignUp </button>
      </form>  
        
       
    </div>
  )
}

export default RegistrationForm