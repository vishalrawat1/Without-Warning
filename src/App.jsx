import React from 'react'
import Login from './components/Login'
import Home from './components/Home'
import Register from './components/Register'
import Navbar from './components/Navbar'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <Navbar/>
    </div>
    // <Router>
    //   <Navbar/>
    //   <Routes exact path = '/' element={<Home/>}/>
    //   <Routes/>
    //   <Routes/>
    // </Router>
  )
}

export default App