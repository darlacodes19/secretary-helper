import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';

function App() {
  return (
  <Router> 
    <div className="App">
      
      <Routes> 
        <Route path='/' element={<LandingPage />} /> 
        <Route path='/login' element={<Login /> } /> 
        <Route path='/register' element={<Register /> } /> 

      </Routes> 
    </div>
  </Router> 
  );
}

export default App;
