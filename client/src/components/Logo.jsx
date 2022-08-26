import { NavLink } from "react-router-dom"
const Logo = () => {
    return (
        <div className="nav-item">
             <NavLink to={'/'} > 
                <li> Logo </li>
                </NavLink>
        </div> 
    )
}

export default Logo 