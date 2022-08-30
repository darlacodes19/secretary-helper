import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Members from './pages/Members';


import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Dashboard from './pages/Dashboard';

function App() {
  return (
  <Router> 
    <div className="App">
      
      <Routes> 
        <Route path='/' element={<LandingPage />} /> 
        <Route path='/login' element={<Login /> } /> 
        <Route path='/register' element={<Register /> } /> 
        <Route path={'/dashboard'} element ={<Dashboard />} />
        <Route path ={'/members'} element = {<Members />} /> 
      </Routes> 
     
    </div>
  </Router> 
  );
}

export default App;
