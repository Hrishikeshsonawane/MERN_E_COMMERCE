import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home/Home.js"
import Login from "./Components/Auth/Login"
import Registeration from "./Components/Auth/Registeration"




function App() {
  return (

    <Router>
      <Routes>
        <Route extract path='/' Component={Home} />
        <Route extract path='/login' element={<Login />} />
        {/* <Route extract path='/register' element={<Registeration />} /> */}
      </Routes>

    </Router>
  );
}

export default App;
