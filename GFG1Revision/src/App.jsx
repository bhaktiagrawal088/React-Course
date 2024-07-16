import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Navbar} from './Component/Navbar'
import { Products } from './Component/Products'
import {products} from './db/products'
function App() {
  

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
    </>
  )
}

export default App
