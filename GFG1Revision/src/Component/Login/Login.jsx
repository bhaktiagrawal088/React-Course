import React from 'react'
import { useAuth } from '../../context/AuthProvider'

function Login() {

    const { isLoggedIn, setIsLoggedIn} = useAuth()
  return (
    <div>
      <h1>This is Login page</h1>
      {
        !isLoggedIn &&  <label> Name:
        <input type="text" placeholder="Enter your name" maxLength={6} />
      </label>
      }
     
      <button onClick={() => {setIsLoggedIn(!isLoggedIn)}}>{!isLoggedIn ? 'Login': 'Logout'}</button>
    </div>
  )
}

export default Login
