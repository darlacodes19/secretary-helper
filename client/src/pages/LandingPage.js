import Navigation from '../components/Navigation'
import { NavLink } from 'react-router-dom'

const LandingPage = () => {

    return (
        <div className='main-page'>
            <Navigation /> 
            <div className='main-section'> 
                <div id='words'> 
                <h1 className='main-title'> Secretary Helper </h1>
                <p id='landing-info'> Some word to descripe the website </p>
                <NavLink to={'/dashboard'} > <button>  DEMO USER </button> </NavLink>
                </div>
                <img src= {require('../assets/SH.png')} alt='secretary' className='landing-image'/>
            </div>

        </div>
    )

}

export default LandingPage