import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Programs from './components/pages/Programs';
import Workouts from './components/pages/Workouts';
import Pricing from './components/pages/Pricing';
import BmiForm from './components/pages/BmiForm';
import BmrForm from './components/pages/BmrForm';
import Form from './components/pages/Form'
import FormSign from './components/pages/FormSign';
import Logout from './components/pages/LogOut';




function App() {
  return (
    <> 
      <Router>
      
      <Routes>
      <Route path='/' element={<Form/>} />
      <Route path='/sign-in' element={<FormSign />} />
      <Route path='/Home' element={<Home/>} />
      <Route path='/programs' element={<Programs/>} />
      <Route path='/Pricing' element={<Pricing/>} />
      <Route path= '/BmiForm' element={<BmiForm/>}/>
      <Route path= '/BmrForm' element={<BmrForm/>}/>
      <Route path= '/Workouts' element={<Workouts/>}/>
      <Route path= '/Logout' element={<Logout/>}/>
      </Routes>
      </Router>
      
    </>
  );
}

export default App;