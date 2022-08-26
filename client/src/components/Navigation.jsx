import { NavLink } from 'react-router-dom'
import Logo from './Logo'
const Navigation = () => {
    return (
        <div className="landing-page-header">
            <ul className= 'nav-links'>
                
                <Logo />
               
               <NavLink to={'/login'} className="nav-item">
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