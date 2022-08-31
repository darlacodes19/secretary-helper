import Navigation from '../components/Navigation'
import { NavLink } from 'react-router-dom'


const LandingPage = () => {

    return (
        <div className='main-page'>
            <Navigation /> 
            <div className='main-section'> 
                <div id='words'> 
                <h1 className='main-title'> Secretary Helper </h1>
                {/* <p id='landing-info'> A place for small churches to organize their workspace. </p> */}
                <NavLink to={'/dashboard'} > <button className='demo-button'>  Demo User </button> </NavLink>
                </div>
                <img src= {require('../assets/SH.png')} alt='secretary' className='landing-image'/>
            </div>
           

        </div>
    )

}

export default LandingPage