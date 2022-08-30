import { NavLink } from 'react-router-dom'
import Logo from './Logo'
const Navigation = () => {
    return (
        <div className="landing-page-header">
            <ul className= 'nav-links'>
                
                <Logo />

                <a href='#' className='toggle-button' > 
                <span className='bar'> </span>
                <span className='bar'> </span>
                <span className='bar'> </span>
                </a>
               
               <NavLink to={'/login'} className="nav-item" id = "sign-in-link">
                <li>   Sign In  </li> 
                </NavLink>
            
               <NavLink to={'/register'} className="nav-item"> 
                <li > <button className="nav-button"> Sign Up </button> </li> 
                </NavLink>
            </ul>
        </div>
    )
}

export default Navigation 