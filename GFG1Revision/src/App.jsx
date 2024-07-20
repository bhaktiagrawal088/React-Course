import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Navbar} from './Component/Navbar'
import { Products } from './Component/Products'
import {products} from './db/products'
import {NavLink, Link, Route, Routes} from "react-router-dom"
import Home from './Component/Home/Home'
import Contact from './Component/Contact/Contact'
import About from './Component/About/About'
import Login from './Component/Login/Login'
import { PrivateRouter } from './Component/PrivateRouter/PrivateRouter'
function App() {

  const getStyle = ({isActive}) => {
    return {
      color: isActive ? "red" : "",
      fontWeight: isActive ? "bold" : "normal"
    }
  }
  

  return (
    <>
     <div className='App'>
        <Navbar className="app"/>
        <h1 className='app'>Products</h1>
        <div className='flex gap-16px app'>
          {
            products?App.length > 0 && products.map(product => (
              <Products key={product._id} product={product}/>
            )) : null
          }
        </div>
     </div>

     <br></br>
     <div>
      <div className='app'>
          <NavLink to="/" style={getStyle }>Home</NavLink>||
          <NavLink to="/about" style={getStyle}> About</NavLink>||
          <NavLink to="/contact" style={getStyle}>Contact</NavLink>||
          <NavLink to="/login" style={getStyle}>Login</NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={
          <PrivateRouter>
            <Contact/>
          </PrivateRouter>
        }/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
     </div>
    </>
  )
}

export default App
