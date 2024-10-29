import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login/login';
import CreateAccount from './components/CreateAccount/create'
import ForgetPassword from './components/ForgetPassword/forgetPassword';
import Home from './components/homePage/home'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path='/forgetPassword'element={<ForgetPassword/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </Router>
  );
};

export default App;
