import { NavLink } from "react-router-dom"
const Logo = () => {
    return (
        <div className="nav-item">
             <NavLink to={'/'} > 
             <img src= {require('../assets/Logo.png')} width='200px' className="logo"/>
                </NavLink>
        </div> 
    )
}

export default Logo 